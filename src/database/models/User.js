module.exports = (sequelize, DataTypes) => {
  const alias = "User";
  const columns = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fullname: {
      type: DataTypes.STRING,
    },
    birthdate: {
      type: DataTypes.DATE,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  };

  const config = {
    tableName: "users",
    paranoid: true,
  };

  const User = sequelize.define(alias, columns, config);

  User.addScope("defaultScope", {
    attributes: { exclude: ["password"] },
  });

  return User;
};
