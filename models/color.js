const mongoose = require("mongoose");

const colorSchema = new mongoose.Schema({
  hex: {
    type: String,
    required: true,
  },
  name: {
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

module.exports = mongoose.model("color", colorSchema);
