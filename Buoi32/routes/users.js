var express = require("express");
var router = express.Router();

const UserController = require("../controller/UserController");

/* GET users listing. */
router.get("/", UserController.index);

router.get("/permission/:id", UserController.permission);
router.post("/permission/:id", UserController.handlePermission);

module.exports = router;
