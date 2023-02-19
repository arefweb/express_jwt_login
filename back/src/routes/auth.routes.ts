import { Express } from "express";

const { verifySignUp } = require("../middleware/verifySignUp");
const controller = require("../controllers/auth.controller");

module.exports = function (app: Express) {
  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkAllFieldsExist,
      verifySignUp.checkDuplicateUsernameOrEmail,
    ],
    controller.signup
  );

  app.post("/api/auth/signin", controller.signIn);
};
