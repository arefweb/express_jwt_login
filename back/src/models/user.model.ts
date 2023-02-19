import { Sequelize, DataTypes, Model, ModelStatic } from "sequelize";

module.exports = (sqlConnection: Sequelize): ModelStatic<Model> => {
  const User = sqlConnection.define("users", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: false,
    },
  });
  return User;
};
