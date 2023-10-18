var express = require("express");
var router = express.Router();

const Homecontroller = require("../controllers/HomeController");
const LoginMiddleware = require("../middlewares/LoginMiddleware");

/* GET home page. */
router.get("/", LoginMiddleware, Homecontroller.index);
router.post("/", Homecontroller.handleShortLink);

module.exports = router;
