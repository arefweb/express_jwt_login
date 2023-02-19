import {DataTypes, Model, ModelStatic, Sequelize} from "sequelize";

export interface IUser {
  username: string;
  email: string;
  password: string;
  [key: string]: number | string;
}

module.exports = (sqlConnection: Sequelize): ModelStatic<Model<IUser>> => {
  return sqlConnection.define("users", {
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
};
