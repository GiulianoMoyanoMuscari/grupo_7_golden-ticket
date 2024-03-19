module.exports = (sequelize, DataTypes) => {
  const alias = "Ticket";
  const columns = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    buy_price: {
      type: DataTypes.DECIMAL(10, 2),
    },
  };

  const config = {
    tableName: "tickets",
    paranoid: true,
  };

  const Ticket = sequelize.define(alias, columns, config);

  Ticket.belongsTo(sequelize.models.Event, {
    as: "event",
    foreignKey: "event_id",
  });

  Ticket.belongsTo(sequelize.models.User, {
    as: "user",
    foreignKey: "user_id",
  });

  return Ticket;
};
