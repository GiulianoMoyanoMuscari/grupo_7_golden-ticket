const controller = {
  login: (req, res) => {
    res.render("users/login", { individualCss: "login" });
  },
  register: (req, res) => {
    res.render("users/register", { individualCss: "login" });
  },
}

module.exports = controller;