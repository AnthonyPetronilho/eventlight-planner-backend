const router = require('express').Router();

const {
  getScenes,
  createScene,
  deleteScene,
  updateScene,
} = require('../controllers/scenes');

const {
  validateCreateScene,
  validateSceneId,
} = require('../middlewares/validators');

router.get('/', getScenes);
router.post('/', validateCreateScene, createScene);
router.put('/:sceneId', validateSceneId, updateScene);
router.delete('/:sceneId', validateSceneId, deleteScene);

module.exports = router;
