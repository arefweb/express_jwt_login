import { Request, Response } from "express";
import { IUser } from "../models/user.model";

const db = require("../models");

const User = db.user;

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;

module.exports.signup = async (req: Request, res: Response) => {
  try {
    const hash = await bcrypt.hash(req.body.password, 8);
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    res
      .status(201)
      .json({ message: newUser.username + " was created successfully!" });
  } catch (error: any) {
    res.status(500).send(error?.errors);
  }
};

module.exports.signIn = (req: Request, res: Response) => {
  User.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then(async (user: IUser | null) => {
      if (user) {
        const isPasswordValid = await bcrypt.compare(
          req.body.password,
          user.password
        );
        if (isPasswordValid) {
          const token = jwt.sign(
            { id: user?.id, username: user?.username, email: user?.email },
            secretKey,
            {
              expiresIn: 60 * 60,
            }
          );
          res.status(201).json({ accessToken: token });
        } else {
          res.status(401).json({ message: "Password is incorrect" });
        }
      } else {
        res.status(404).json({ message: "user not found!" });
      }
    })
    .catch((err: any) => {
      res.status(500).send(err);
    });
};
