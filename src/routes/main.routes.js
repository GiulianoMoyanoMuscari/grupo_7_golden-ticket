const express = require("express");
const router = express.Router();

const { mainController } = require("../controllers");

router.get("/", mainController.index);
router.get("/cart", mainController.showCart);

module.exports = router;
