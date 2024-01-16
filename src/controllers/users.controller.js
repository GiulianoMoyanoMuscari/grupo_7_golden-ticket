const db = require("../db");

const controller = {
  login: (req, res) => {
    res.render("users/login", { individualCss: "login" });
  },
  register: (req, res) => {
    res.render("users/register", { individualCss: "login" });
  },
  create: (req, res) => {
    const newUser = {
      ...req.body,
    };

    const existeUsuario = db.exists("users", req.body.email, "email");
    console.log(existeUsuario);
    if (existeUsuario) {
      return res.render("users/register", {
        individualCss: "login",
        error: "El usuario ya existe",
      });
    }
    db.create("users", newUser);
  },
};

module.exports = controller;
