const db = require("../db");

const controller = {
  // Todos los productos
  index: (req, res) => {
    const products = db.readAll("products");
    res.render("products/products.ejs", {
      list: products,
      individualCss: "product-detail",
    });
  },

  // Detalle de 1 producto
  detail: (req, res) => {
    const id = parseInt(req.params.id);
    const producto = db.readOne("products", id);
    // debe renderizar la vista con los detalles del producto
    res.render("products/product-detail", { individualCss: "product-detail", data: producto});
  },

  // carrito de compra
  cart: (req, res) => {
    res.render("products/product-cart", { individualCss: undefined });
  },

  // Formulario de Compra
  purchase: (req, res) => {
    res.render("products/purchase-form", { individualCss: "purchase-form" });
  },

  // Formulario de Creacion
  create: (req, res) => {
    db.create("products", {
      id: parseInt(req.params.id),
      nombre: req.params.nombre,
      descripcion: req.params.descripcion,
      precio: req.params.precio,
      categoria: req.params.categoria,
      imagen: req.params.imagen,
      fecha: req.params.fecha,
    });
    res.render("products/product-create-form", { individualCss: "login" });
  },

  // Formulario de Edicion
  edit: (req, res) => {
    const producto = db.readOne(parseInt(req.params.id));
    /* db.update("products", producto.id, {
      id: parseInt(req.params.id),
      nombre: req.params.nombre,
      descripcion: req.params.descripcion,
      precio: req.params.precio,
      categoria: req.params.categoria,
      imagen: req.params.imagen,
      fecha: req.params.fecha,
    }); */
    res.render("products/product-edit-form", { individualCss: "login", data: producto});
  },
};

module.exports = controller;
