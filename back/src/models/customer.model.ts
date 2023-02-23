import { DataTypes, Model, ModelStatic, Sequelize } from "sequelize";

export interface ICustomer {
  fullName: string;
  phone: string;
  city: string;
}

module.exports = (sqlConnection: Sequelize): ModelStatic<Model<ICustomer>> => {
  return sqlConnection.define("customers", {
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: false,
    },
    phone: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: false,
    },
    city: {
      type: DataTypes.CHAR,
    },
  });
};
