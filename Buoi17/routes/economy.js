var express = require("express");
var router = express.Router();

var economyController = require("../controllers/EconomyController");

router.get("/", economyController.home);
router.get("/post1", economyController.post1);
router.get("/post2", economyController.post2);

module.exports = router;
