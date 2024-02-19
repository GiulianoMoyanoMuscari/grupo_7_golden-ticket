module.exports = (sequelize, DataTypes) => {
  const alias = "User";
  const columns = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
  autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  };

  const config = {
    tableName: "users",
    paranoid: true,
  };

  const User = sequelize.define(alias, columns, config);

  return User;
};
