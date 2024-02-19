module.exports = (sequelize, DataTypes) => {
  const alias = "Event";

  const columns = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    expire_date: {
      type: DataTypes.DATE,
    },
    image: {
      type: DataTypes.STRING,
    },
    banner: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0.0,
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    featured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  };

  const config = {
    tableName: "events",
    paranoid: true,
  };

  const Event = sequelize.define(alias, columns, config);

  return Event;
};
