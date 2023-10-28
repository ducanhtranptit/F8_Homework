var express = require("express");
var router = express.Router();

const AuthController = require("../controllers/Auth/AuthController");

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);

module.exports = router;
