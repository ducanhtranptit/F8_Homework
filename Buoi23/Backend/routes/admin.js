var express = require("express");
var router = express.Router();

const AdminController = require("../controllers/AdminController");

router.get("/", AdminController.adminHome);
router.post("/", AdminController.getCustomerList);
router.post("/logout", AdminController.logout);
router.get("/customer", AdminController.showCustomerList);

module.exports = router;
