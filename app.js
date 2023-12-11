const express = require("express");
const app = express();
const path = require("path");

const PORT = 3000;

const pathPublic = path.join(__dirname, "./src/public/");

app.set("views", path.join(__dirname, "/src/views"));
app.set("view engine", "ejs");

// Definimos Rutas y Flujo Request-Response  //
app.get("/", (req, res) => {
  res.render("index", { individualCss: "product-detail" });
});
app.get("/product-details", (req, res) => {
  res.render("product-detail", { individualCss: "product-detail" });
});
app.get("/purchase-form", (req, res) => {
  res.render("purchase-form", { individualCss: "purchase-form" });
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
app.get("/product/create", (req, res) => {
  res.render("product-create-form", { individualCss: "register" });
});

// Dejamos Estaticos a los recursos de la carpeta Public //
app.use(express.static(pathPublic));

// Levantamos el Servidor //
app.listen(PORT, () =>
  console.log(
    `Servidor funcionando en el puerto ${PORT}. http://localhost:3000/`
  )
);
