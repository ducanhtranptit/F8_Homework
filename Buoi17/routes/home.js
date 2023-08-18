var express = require("express");
var router = express.Router();

var homeController = require("../controllers/HomeController");

router.get("/", homeController.home);
router.get("/home", (req, res) => {
  res.redirect("/");
});

module.exports = router;
