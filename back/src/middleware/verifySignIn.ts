import { Request, Response, NextFunction } from "express";
const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;

const checkToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) {
    return res
      .status(401)
      .json({ message: "Authorization token not provided!" });
  }

  try {
    const rawToken = token.split("Bearer ")[1];
    jwt.verify(rawToken, secretKey);
  } catch (error: any) {
    return res
      .status(401)
      .json({ message: "Your token is not valid", reason: error.message });
  }
  next();
};

module.exports.verifySignIn = {
  checkToken,
};
