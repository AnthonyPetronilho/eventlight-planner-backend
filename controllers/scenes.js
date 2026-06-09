const Scene = require("../models/scene");

const getScenes = (req, res) => {
  Scene.find({ owner: req.user._id })
    .then((scenes) => res.send(scenes))
    .catch(() => {
      res.status(500).send({ message: "Erro no servidor" });
    });
};

const createScene = (req, res) => {
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
    .catch((error) => {
      if (error.name === "ValidationError") {
        return res.status(400).send({ message: "Dados inválidos" });
      }

      return res.status(500).send({ message: "Erro no servidor" });
    });
};

const deleteScene = (req, res) => {
  const { sceneId } = req.params;

  Scene.findById(sceneId)
    .select("+owner")
    .then((scene) => {
      if (!scene) {
        return res.status(404).send({ message: "Cena não encontrada" });
      }

      if (scene.owner.toString() !== req.user._id) {
        return res.status(403).send({ message: "Acesso negado" });
      }

      return Scene.findByIdAndDelete(sceneId).then(() =>
        res.send({ message: "Cena removida com sucesso" }),
      );
    })
    .catch((error) => {
      if (error.name === "CastError") {
        return res.status(400).send({ message: "ID inválido" });
      }

      return res.status(500).send({ message: "Erro no servidor" });
    });
};

module.exports = {
  getScenes,
  createScene,
  deleteScene,
};
