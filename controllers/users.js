const User = require("../models/user");

const getCurrentUser = (req, res) => {
  User.findById(req.user._id)
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "Usuário não encontrado" });
      }

      return res.send({
        email: user.email,
        name: user.name,
      });
    })
    .catch(() => {
      res.status(500).send({ message: "Erro no servidor" });
    });
};

module.exports = {
  getCurrentUser,
};
