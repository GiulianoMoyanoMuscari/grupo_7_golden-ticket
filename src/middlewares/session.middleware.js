const session = require("express-session");
const { sequelize } = require("../database/models");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sessionMiddleware = session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: sequelize,
  }),
});
module.exports = sessionMiddleware;
