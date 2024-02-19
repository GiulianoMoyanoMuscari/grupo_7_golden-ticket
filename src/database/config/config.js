module.exports = {
  development: {
    username: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DBNAME,
    host: process.env.HOST,
    dialect: process.env.DIALECT,
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
