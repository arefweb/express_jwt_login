import { Request, Response, NextFunction } from "express";
import { Model } from "sequelize";
const db = require("../models");
const User = db.user;

const checkAllFieldsExist = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400).json({ message: "Please provide all required fields!" });
    return;
  }
  next();
};

const checkDuplicateUsernameOrEmail = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Username
  User.findOne({
    where: {
      username: req.body.username,
    },
  }).then((user: Model) => {
    if (user) {
      res.status(400).send({
        message: "Failed! Username is already in use!",
      });
      return;
    }

    // Email
    User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((user: Model) => {
      if (user) {
        res.status(400).send({
          message: "Failed! Email is already in use!",
        });
        return;
      }
      next();
    });
  });
};

module.exports.verifySignUp = {
  checkAllFieldsExist,
  checkDuplicateUsernameOrEmail,
};
