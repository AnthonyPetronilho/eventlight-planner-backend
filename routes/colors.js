const router = require('express').Router();

const {
  getColors,
  createColor,
  deleteColor,
} = require('../controllers/colors');

router.get('/', getColors);
router.post('/', createColor);
router.delete('/:colorId', deleteColor);

module.exports = router;
