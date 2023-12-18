const controller = {
	index: (req, res) => {
		res.render('index.ejs', { individualCss: "product-detail" });
	},
  login: (req, res) => {
    res.render("login", { individualCss: "login" })
  },
  register: (req, res) => {
    res.render("register", { individualCss: "register" });
  },
};

module.exports = controller;