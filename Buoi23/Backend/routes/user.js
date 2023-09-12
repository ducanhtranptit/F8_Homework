var express = require("express");
var router = express.Router();

const UserController = require("../controllers/UserController");

router.get("/", UserController.home);
router.post("/", UserController.logout);

module.exports = router;
