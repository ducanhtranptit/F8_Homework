var express = require("express");
var router = express.Router();
const UserController = require("../controllers/UserController");

router.post("/send-mail", UserController.handleVerify);

module.exports = router;
