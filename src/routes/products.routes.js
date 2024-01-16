// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Controller Require ************
const productController = require("../controllers/products.controller");

// **** GET ALL PRODUCTS ***//
router.get("/", productController.index); // todos los productos


// **** CREATE ONE PRODUCT ***//
router.get("/create", productController.create); // formulario de creacion
router.post("/create", productController.store); // acción de creación


// **** GET ONE PRODUCTS ***//
router.get("/:id", productController.detail); // detalle de 1 producto


// **** EDIT ONE PRODUCT ***//
router.get("/:id/edit", productController.edit); // formulario de edicion
router.put("/:id/edit", productController.update); // accion de edicion


// **** DELETE ONE PRODUCT ***//
router.delete("/:id/delete", productController.destroy); // accion de borrado


module.exports = router;