const controller = {
	index: (req, res) => {
		res.render('index.ejs', { individualCss: "product-detail" });
	}
};

module.exports = controller;