const { Sequelize } = require("sequelize");
const config = require("../config/db.config");

const sqlConnection = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
});

const user = require("./user.model")(sqlConnection);
const customer = require("./customer.model")(sqlConnection);

const db = {
  Sequelize: Sequelize,
  sqlConnection: sqlConnection,
  user: user,
  customer: customer,
};

module.exports = db;
