const express = require("express");
const router = express.Router();

const UserController = require("../controllers/API/UserController");
const CheckBannedUserMiddleware = require("../middlewares/CheckBannedUserMiddleware");

/* GET users listing. */
router.get("/", UserController.index);
router.post("/", UserController.create);
router.put("/:id", CheckBannedUserMiddleware.bannedUser, UserController.edit);
router.patch("/:id", CheckBannedUserMiddleware.bannedUser, UserController.update);
router.delete("/:id", CheckBannedUserMiddleware.bannedUser, UserController.delete);

module.exports = router;
