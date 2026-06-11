module.exports = (err, req, res, _next) => {
  const { statusCode = 500 } = err;

  const message = statusCode === 500 ? "Erro interno do servidor" : err.message;

  res.status(statusCode).send({ message });
};
