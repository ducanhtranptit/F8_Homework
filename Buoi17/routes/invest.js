var express = require("express");
var router = express.Router();

var investController = require("../controllers/InvestController");

router.get("/", investController.home);
router.get("/post1", investController.post1);
router.get("/post2", investController.post2);
router.get("/post3", investController.post3);

module.exports = router;
