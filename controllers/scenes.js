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
    .catch(next);
};

module.exports.deleteScene = (req, res, next) => {
  const { sceneId } = req.params;

  Scene.findOneAndDelete({
    _id: sceneId,
    owner: req.user._id,
  })
    .orFail()
    .then((scene) => res.send(scene))
    .catch(next);
};
