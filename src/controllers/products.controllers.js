const controller = {
  // Todos los productos
	index: (req, res) => {
		res.render('products/products.ejs')
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
		res.render("products/product-create-form", { individualCss: "register" });
	},

	// Formulario de Edicion
	edit: (req, res) => {
		res.render("products/product-edit-form", { individualCss: "register" });
	}
};

module.exports = controller;