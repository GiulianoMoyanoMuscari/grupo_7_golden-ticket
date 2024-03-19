const controller = {
	index: (req, res) => {
		res.render('index.ejs');
	},
	showCart: (req, res) => {
		res.render('cart.ejs')
	}
};

module.exports = controller;