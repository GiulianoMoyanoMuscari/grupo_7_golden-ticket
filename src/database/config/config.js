module.exports = {
  development: {
    username: process.env.DBUSER || "root",
    password: process.env.DBPASS || "",
    database: process.env.DBNAME || "golden_ticket",
    host: process.env.HOST || "127.0.0.1",
    dialect: process.env.DIALECT || "mysql",
    define: {
      underscored: true,
    },
  },
  test: {
    username: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DBNAME,
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    define: {
      underscored: true,
    },
  },
  production: {
    username: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DBNAME,
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    define: {
      underscored: true,
    },
  },
};
