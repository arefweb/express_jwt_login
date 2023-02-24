import { Express } from "express";

const { verifySignIn } = require("../middleware/verifySignIn");
const controller = require("../controllers/customers.controller");

module.exports = function (app: Express) {
  app.get(
    "/api/customer/:id",
    [verifySignIn.checkToken],
    controller.getCustomer
  );
  app.get("/api/customers", [verifySignIn.checkToken], controller.getCustomers);
  app.post(
    "/api/customer",
    [verifySignIn.checkToken],
    controller.createCustomer
  );
  app.get("/api/test", controller.test);
};
