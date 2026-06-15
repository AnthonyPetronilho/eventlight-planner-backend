const Color = require("../models/color");

module.exports.getColors = (req, res, next) => {
  Color.find({ owner: req.user._id })
    .then((colors) => res.send(colors))
    .catch(next);
};

module.exports.createColor = (req, res, next) => {
  const { hex, name } = req.body;

  Color.create({
    hex,
    name,
    owner: req.user._id,
  })
    .then((color) => res.status(201).send(color))
    .catch(next);
};

module.exports.deleteColor = (req, res, next) => {
  Color.findOneAndDelete({
    _id: req.params.colorId,
    owner: req.user._id,
  })
    .then((color) => {
      if (!color) {
        const error = new Error("Cor não encontrada");
        error.statusCode = 404;
        throw error;
      }

      res.send(color);
    })
    .catch(next);
};
