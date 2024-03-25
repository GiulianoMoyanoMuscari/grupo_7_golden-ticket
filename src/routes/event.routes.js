const express = require("express");
const router = express.Router();
const { permission } = require("../middlewares");
const { eventController } = require("../controllers");
const middlewares = require("../middlewares");

// Vistas
router.get("/create", permission, eventController.create);
// API
router.get("/", eventController.list);
router.post(
  "/",
  permission,
  middlewares.multer.fields([
    { name: "image", maxCount: 1 },
    { name: "banner", maxCount: 1 },
  ]),
  eventController.processCreate
);

module.exports = router;
