const express = require("express");
const router = express.Router();
const { ticketController } = require("../controllers");

// Vistas

// API
router.get("/", ticketController.list);
router.post("/", ticketController.create);
router.get("/:id", ticketController.verify);
router.put("/:id", ticketController.update);
router.delete("/:id", ticketController.delete);

module.exports = router;
