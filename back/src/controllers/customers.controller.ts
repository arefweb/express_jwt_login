import { Request, Response } from "express";
import { Model } from "sequelize";
import { ICustomer } from "../models/customer.model";
const db = require("../models");
const Customer = db.customer;

module.exports.getCustomers = (req: Request, res: Response) => {
  Customer.findAll().then((customers: Model<ICustomer>[]) => {
    res.send(customers);
  });
};

module.exports.getCustomer = (req: Request, res: Response) => {
  Customer.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((customer: ICustomer | null) => {
      if (!customer) {
        return res.status(404).json({ message: "Couldn't find customer!" });
      }
      res.json(customer);
    })
    .catch((error: any) => {
      res.status(500).json({ message: error });
    });
};

module.exports.createCustomer = (req: Request, res: Response) => {
  const { fullName, phone, city } = req.body;
  if (!fullName || !phone || !city) {
    return res.status(400).send("Please fill in all the required fields");
  }
  try {
    Customer.create({
      fullName: fullName,
      phone: phone,
      city: city,
    });
    res.status(201).send("Customer added successfully");
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports.test = (req: Request, res: Response) => {
  res.json({ message: "Hi, You have called backend service. May I help you?" });
};
