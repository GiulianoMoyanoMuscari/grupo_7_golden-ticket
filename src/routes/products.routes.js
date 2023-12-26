// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Controller Require ************
const productController = require("../controllers/products.controller");

router.get("/", productController.index); // todos los productos
router.get("/:id", productController.detail); // detalle de 1 producto
router.get("/cart", productController.cart); // carrito
router.get("/purchase", productController.purchase); // formulario de compra

router.get("/create", productController.create); // formulario de creacion
router.get("/:id/edit", productController.edit); // formulario de edicion

router.post("/:id", productController.create);

module.exports = router;