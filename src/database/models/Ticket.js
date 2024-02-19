module.exports = (sequelize, DataTypes) => {
  const alias = "Ticket";
  const columns = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  };

  const config = {
    tableName: "tickets",
    paranoid: true,
  };

  const Ticket = sequelize.define(alias, columns, config);

  return Ticket;
};
