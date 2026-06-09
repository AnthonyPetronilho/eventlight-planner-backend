const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();

const { PORT = 3001, MONGO_URL = "mongodb://127.0.0.1:27017/eventlightdb" } =
  process.env;

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send({ message: "EventLight Planner API" });
});

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });
