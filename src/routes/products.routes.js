// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Controller Require ************
const productController = require("../controllers/products.controller");

router.get("/", productController.index); // todos los productos
router.get("/detail", productController.detail); // detalle de 1 producto
router.get("/cart", productController.cart); // carrito
router.get("/purchase", productController.purchase); // formulario de compra

router.get("/create", productController.create); // formulario de creacion
router.get("/edit", productController.edit); // formulario de edicion

module.exports = router;