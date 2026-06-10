module.exports = (err, req, res, _next) => {
  console.error(err);

  return res.status(500).send({
    message: "Erro interno do servidor",
  });
};
