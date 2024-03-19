const express = require("express");
const router = express.Router();
const { eventController } = require("../controllers");
const middlewares = require("../middlewares");

// Vistas
router.get("/create", eventController.create);
// API
router.get("/list", eventController.list);
router.post(
  "/create",
  middlewares.multer.fields([
    { name: "image", maxCount: 1 },
    { name: "banner", maxCount: 1 },
  ]),
  eventController.processCreate
);

module.exports = router;
