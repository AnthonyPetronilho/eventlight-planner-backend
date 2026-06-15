const router = require("express").Router();

router.use("/users", require("./users"));
router.use("/scenes", require("./scenes"));
router.use("/colors", require("./colors"));

module.exports = router;
