var express = require("express");
var router = express.Router();

const UserController = require("../controllers/UserController");

router.get("/:id", UserController.getUserById);

module.exports = router;
