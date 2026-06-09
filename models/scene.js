const mongoose = require("mongoose");

const sceneSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 60,
  },
  eventType: {
    type: String,
    required: true,
  },
  moment: {
    type: String,
    required: true,
  },
  colors: {
    type: [String],
    required: true,
  },
  fixtures: {
    type: [String],
    required: true,
  },
  movement: {
    type: String,
    required: true,
  },
  intensity: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
    default: "",
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
    select: false,
  },
});

module.exports = mongoose.model("scene", sceneSchema);
