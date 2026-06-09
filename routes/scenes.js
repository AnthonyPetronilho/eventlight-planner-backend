const router = require("express").Router();

const {
  getScenes,
  createScene,
  deleteScene,
} = require("../controllers/scenes");

router.get("/", getScenes);
router.post("/", createScene);
router.delete("/:sceneId", deleteScene);

module.exports = router;
