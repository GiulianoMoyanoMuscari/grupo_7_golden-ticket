// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Controller Require ************
const usersController = require("../controllers/users.controller");

router.get("/login", usersController.login);
router.get("/register", usersController.register);

router.post("/register", usersController.create);

module.exports = router;
