var express = require("express");
var router = express.Router();

const UserController = require("../controller/UserController");

/* GET users listing. */
router.get("/", UserController.index);

router.get("/permission/:id", UserController.permission);
router.post("/permission/:id", UserController.handlePermission);
router.get("/add", UserController.add);
router.post("/add", UserController.handleAdd);
router.get("/edit/:id", UserController.edit);
router.post("/edit/:id", UserController.handleEdit);
router.post("/delete/:id", UserController.delete);

module.exports = router;
