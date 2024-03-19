const express = require("express");
const router = express.Router();
const { userController } = require("../controllers");

router.get("/login", userController.showLogin);
router.get("/register", userController.showRegister);
router.get("/logout", userController.logout);

router.get("/", userController.getUsers);
router.post("/", userController.createUser);
router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.post("/login", userController.login);
router.post("/register", userController.register);

module.exports = router;
