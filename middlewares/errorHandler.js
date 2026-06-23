const { isCelebrateError } = require('celebrate');

module.exports = (err, req, res) => {
  if (isCelebrateError(err)) {
    return res.status(400).send({
      message: 'Dados inválidos. Verifique os campos preenchidos.',
    });
  }

  const { statusCode = 500 } = err;

  const message = statusCode === 500 ? 'Erro interno do servidor' : err.message;

  return res.status(statusCode).send({ message });
};
