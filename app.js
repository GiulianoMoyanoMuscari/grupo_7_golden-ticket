const express = require("express");
const listEndpoints = require("express-list-endpoints");
const methodOverride = require("method-override");
const middlewares = require("./src/middlewares");
const { sequelize } = require("./src/database/models");
const routes = require("./src/routes");
const PORT = process.env.PORT || 3000;
const path = require("path");
const pathPublic = path.join(__dirname, "./src/public/");
const app = express();

app.set("views", path.join(__dirname, "/src/views"));
app.set("view engine", "ejs");

app.use(express.static(pathPublic));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(middlewares.session);
app.use(middlewares.auth);

app.use("/", routes.mainRoutes);
app.use("/users", routes.userRoutes);
app.use("/tickets", routes.ticketRoutes);
app.use("/events", routes.eventRoutes);

app.listen(PORT, () => {
  sequelize.sync();
  console.log("Endpoints de la aplicación: ");
  console.table(listEndpoints(app));
  console.log(
    `\nServidor funcionando en el puerto ${PORT}. http://localhost:3000/`
  );
});
