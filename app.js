const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const usersRouter = require("./routes/users");
const scenesRouter = require("./routes/scenes");
const colorRoutes = require("./routes/colors");

const auth = require("./middlewares/auth");
const { createUser, login } = require("./controllers/users");

const app = express();

const { PORT = 3001, MONGO_URL = "mongodb://127.0.0.1:27017/eventlightdb" } =
  process.env;

const { requestLogger, errorLogger } = require("./utils/logger");
const errorHandler = require("./middlewares/errorHandler");
const { errors } = require("celebrate");
const { validateSignup, validateSignin } = require("./middlewares/validators");

app.use(cors());
app.use(express.json());

app.use(requestLogger);

app.get("/", (req, res) => {
  res.send({ message: "EventLight Planner API" });
});

app.post("/signup", validateSignup, createUser);
app.post("/signin", validateSignin, login);

app.use(auth);

app.use("/users", usersRouter);
app.use("/scenes", scenesRouter);
app.use("/colors", colorRoutes);

app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

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
