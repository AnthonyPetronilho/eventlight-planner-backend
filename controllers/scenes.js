const Scene = require("../models/scene");

module.exports.getScenes = (req, res, next) => {
  Scene.find({ owner: req.user._id })
    .then((scenes) => res.send(scenes))
    .catch(next);
};

module.exports.createScene = (req, res, next) => {
  const {
    title,
    eventType,
    moment,
    colors,
    fixtures,
    movement,
    intensity,
    notes,
  } = req.body;

  Scene.create({
    title,
    eventType,
    moment,
    colors,
    fixtures,
    movement,
    intensity,
    notes,
    owner: req.user._id,
  })
    .then((scene) => res.status(201).send(scene))
    .catch((err) => {
      if (err.name === "ValidationError") {
        err.statusCode = 400;
      }

      next(err);
    });
};

module.exports.deleteScene = (req, res, next) => {
  const { sceneId } = req.params;

  Scene.findOneAndDelete({
    _id: sceneId,
    owner: req.user._id,
  })
    .orFail()
    .then((scene) => res.send(scene))
    .catch((err) => {
      if (err.name === "CastError") {
        err.statusCode = 400;
        err.message = "ID inválido";
      }

      if (err.name === "DocumentNotFoundError") {
        err.statusCode = 404;
        err.message = "Cena não encontrada";
      }

      next(err);
    });
};
