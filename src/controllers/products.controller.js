const db = require("../db");

const controller = {
  // Todos los productos
  index: (req, res) => {
    const products = db.readAll("products");
    res.render("products/products.ejs", { list: products });
  },

  // Detalle de 1 producto
  detail: (req, res) => {
    res.render("products/product-detail", { individualCss: "product-detail" });
  },

  // carrito de compra
  cart: (req, res) => {
    res.render("products/product-cart");
  },

  // Formulario de Compra
  purchase: (req, res) => {
    res.render("products/purchase-form", { individualCss: "purchase-form" });
  },

  // Formulario de Creacion
  create: (req, res) => {
    res.render("products/product-create-form", { individualCss: "login" });
  },

  // Formulario de Edicion
  edit: (req, res) => {
    res.render("products/product-edit-form", { individualCss: "login" });
  },
};

module.exports = controller;
