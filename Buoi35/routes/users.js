const express = require("express");
const router = express.Router();

const UserController = require("../controllers/API/UserController");
const CheckBannedUserMiddleware = require("../middlewares/CheckBannedUserMiddleware");

/* GET users listing. */
router.get("/", UserController.index);
router.post("/", UserController.create);
router.post("/revoke/:id", CheckBannedUserMiddleware.checkBannedUser, UserController.revoke);
router.put("/:id", CheckBannedUserMiddleware.checkBannedUser, UserController.edit);
router.patch("/:id", CheckBannedUserMiddleware.checkBannedUser, UserController.update);
router.delete("/:id", CheckBannedUserMiddleware.checkBannedUser, UserController.delete);

module.exports = router;
