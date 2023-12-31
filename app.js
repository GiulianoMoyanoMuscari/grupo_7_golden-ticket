// ************ Require's ************
const express = require("express");
const path = require("path");

// ************ express() - (don't touch)************
const app = express();

// ************ Configuraciones ************
// Dejamos Estaticos a los recursos de la carpeta Public //
const pathPublic = path.join(__dirname, "./src/public/");
app.use(express.static(pathPublic));

// Motor de Vistas
app.set("views", path.join(__dirname, "/src/views"));
app.set("view engine", "ejs");


// ************ Route System require and use() ************
const mainRouter = require('./src/routes/main.routes'); // Require Rutas main
const productsRouter = require('./src/routes/products.routes'); // Require Rutas products

app.use('/', mainRouter);
app.use('/products', productsRouter);


// ************ Levantamos el Servidor ************
const PORT = 3000;
app.listen(PORT, () =>
  console.log(
    `Servidor funcionando en el puerto ${PORT}. http://localhost:3000/`
  )
);
