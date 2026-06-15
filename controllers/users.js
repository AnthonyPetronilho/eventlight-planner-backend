const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

const JWT_SECRET = process.env.NODE_ENV === 'production' ? process.env.JWT_SECRET : 'dev-secret';

module.exports.createUser = (req, res) => {
  const { email, password, name } = req.body;

  bcrypt
    .hash(password, 10)
    .then((hash) => User.create({
      email,
      password: hash,
      name,
    }))
    .then((user) => {
      res.status(201).send({
        email: user.email,
        name: user.name,
      });
    })
    .catch((error) => {
      if (error.code === 11000) {
        return res.status(409).send({
          message: 'Este e-mail já está cadastrado.',
        });
      }

      if (error.name === 'ValidationError') {
        return res.status(400).send({
          message: 'Dados inválidos. Verifique nome, e-mail e senha.',
        });
      }

      return res.status(500).send({
        message: 'Erro interno do servidor.',
      });
    });
};

module.exports.login = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email })
    .select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new Error('E-mail ou senha inválidos'));
      }

      return bcrypt.compare(password, user.password).then((matched) => {
        if (!matched) {
          return Promise.reject(new Error('E-mail ou senha inválidos'));
        }

        const token = jwt.sign({ _id: user._id }, JWT_SECRET, {
          expiresIn: '7d',
        });

        return res.send({ token });
      });
    })
    .catch(() => {
      res.status(401).send({ message: 'E-mail ou senha inválidos' });
    });
};

module.exports.getCurrentUser = (req, res, next) => {
  User.findById(req.user._id)
    .orFail()
    .then((user) => {
      res.send({
        email: user.email,
        name: user.name,
      });
    })
    .catch((err) => {
      if (err.name === 'DocumentNotFoundError') {
        const error = new Error('Usuário não encontrado');
        error.statusCode = 404;
        return next(error);
      }

      return next(err);
    });
};
