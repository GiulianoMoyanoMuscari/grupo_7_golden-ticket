const db = require("../db");

const controller = {
	index: (req, res) => {
		const products = db.readAll("products");

		const listaDestacados = products.filter(product => product.categoria === "destacados");
		const listaEstaSemana = products.filter(product => product.categoria === "esta semana");

		res.render('index.ejs', { individualCss: "product-detail", listaDestacados, listaEstaSemana});
	}
};

module.exports = controller;