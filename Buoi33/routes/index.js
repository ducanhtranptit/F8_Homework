var express = require("express");
var router = express.Router();

const Homecontroller = require("../controllers/HomeController");

/* GET home page. */
router.get("/", Homecontroller.index);
router.post("/", Homecontroller.handleShortLink);

module.exports = router;
