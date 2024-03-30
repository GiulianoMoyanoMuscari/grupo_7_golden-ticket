const express = require("express");
const { permission } = require("../middlewares");
const router = express.Router();
const { userController } = require("../controllers");

router.get("/login", userController.showLogin);
router.get("/register", userController.showRegister);
router.get("/logout", userController.logout);
router.get("/profile", userController.profile);

router.get("/", permission, userController.getUsers);
router.post("/", userController.createUser);
router.get("/:id", permission, userController.getUserById);
router.put("/:id", permission, userController.updateUser);
router.delete("/:id", permission, userController.deleteUser);
router.post("/login", userController.login);
router.post("/register", userController.register);

module.exports = router;
