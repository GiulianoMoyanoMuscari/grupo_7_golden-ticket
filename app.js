// ************ Require's ************
const express = require("express");
const path = require("path");
const listEndpoints = require("express-list-endpoints");
const methodOverride = require("method-override");
const middlewares = require("./src/middlewares");
const { sequelize } = require("./src/database/models");

// ************ express() - (don't touch)************
const app = express();

// ************ Configuraciones ************
// Dejamos Estaticos a los recursos de la carpeta Public //
const pathPublic = path.join(__dirname, "./src/public/");
app.use(express.static(pathPublic));

// Motor de Vistas
app.set("views", path.join(__dirname, "/src/views"));
app.set("view engine", "ejs");

// Capturar la información de un formulario en un Objeto Literal
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(middlewares.session);
app.use(middlewares.auth);

// Usar metodos PUT y DELETE
app.use(methodOverride("_method"));

// ************ Route System require and use() ************
const routes = require("./src/routes");

app.use("/", routes.mainRoutes);
app.use("/users", routes.userRoutes);
app.use("/tickets", routes.ticketRoutes);
app.use("/events", routes.eventRoutes);

// ************ Levantamos el Servidor ************
const PORT = 3000;
app.listen(PORT, () => {
  sequelize.sync();
  console.log("Endpoints de la aplicación: ");
  console.table(listEndpoints(app));
  console.log(
    `\nServidor funcionando en el puerto ${PORT}. http://localhost:3000/`
  );
});
