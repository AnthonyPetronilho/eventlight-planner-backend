const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const usersRouter = require("./routes/users");
const scenesRouter = require("./routes/scenes");
const auth = require("./middlewares/auth");

require("dotenv").config();

const app = express();

const { PORT = 3001, MONGO_URL = "mongodb://127.0.0.1:27017/eventlightdb" } =
  process.env;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "EventLight Planner API" });
});

app.use(auth);

app.use("/users", usersRouter);
app.use("/scenes", scenesRouter);

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
