import { Request, Response } from "express";

const db = require("../models");

const User = db.user;

const bcrypt = require("bcrypt");

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
