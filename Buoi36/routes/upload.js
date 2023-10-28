var express = require("express");
var router = express.Router();

const UploadFileController = require("../controllers/API/UploadFileController");

router.post("/", UploadFileController.upload);
router.get("/video-link-list", UploadFileController.index);
router.get("/:fileName", UploadFileController.sendFIle);

module.exports = router;
