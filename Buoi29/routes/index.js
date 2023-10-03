var express = require("express");
var router = express.Router();

const EmailController = require("../controllers/EmailController");

/* GET home page. */
router.get("/", EmailController.home);
router.get("/send-email", EmailController.sendEmail);
router.post("/send-email", EmailController.handleSendEmail);
router.get("/show-email-list", EmailController.getEmailList);
router.get("/content/:id", EmailController.getContent);

module.exports = router;
