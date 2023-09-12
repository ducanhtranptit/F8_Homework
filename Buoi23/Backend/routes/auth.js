var express = require("express");
var router = express.Router();

const AuthController = require("../controllers/AuthController");

/* GET users listing. */
router.get("/", AuthController.login);
router.post("/", AuthController.handleLogin);

module.exports = router;
