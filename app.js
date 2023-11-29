const express = require("express");
const app = express();
const path = require("path");

const PORT = 3000;

const pathPublic = path.join(__dirname, "./src/public/");

app.set("views", path.join(__dirname, "/src/views"));
app.set("view engine", "ejs");

// Definimos Rutas y Flujo Request-Response  //
app.get("/", (req, res) => {
  res.render("index", { individualCss: "product-details" });
});
app.get("/product-details", (req, res) => {
  res.render("product-details", { individualCss: "product-details" });
});
app.get("/purchase-form", (req, res) => {
  res.render("purchase-form", { individualCss: "product-form" });
});
app.get("/product-cart", (req, res) => {
  res.render("product-cart");
});
app.get("/login", (req, res) => {
  res.render("login", { individualCss: "login" });
});
app.get("/register", (req, res) => {
  res.render("register", { individualCss: "register" });
});

// Dejamos Estaticos a los recursos de la carpeta Public //
app.use(express.static(pathPublic));

// Levantamos el Servidor //
app.listen(PORT, () =>
  console.log(
    `Servidor funcionando en el puerto ${PORT}. http://localhost:3000/`
  )
);
