var express = require("express");
var router = express.Router();

var fashionController = require("../controllers/FashionController");

router.get("/", fashionController.home);
router.get("/post1", fashionController.post1);
router.get("/post2", fashionController.post2);
router.get("/post3", fashionController.post3);

module.exports = router;
