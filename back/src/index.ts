import express, { Express, Request, Response } from "express";
const cors = require("cors");
// const db = require("./models");

const app: Express = express();
const PORT = process.env.PORT || 4000;
require("dotenv").config();

// body parser "json"
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Typescript and Node.js works!");
});

// routes
require("./routes/auth.routes")(app);
require("./routes/customer.routes")(app);

// (async () => {
//   try {
//     await db.sqlConnection.sync({ force: true }).then(() => {
//       db.user.create({
//         username: "admin",
//         email: "test@gmail.com",
//         password: "1234",
//       });
//       db.customer.create({
//         fullName: "Richard Dawkins",
//         phone: "0044-4882589",
//         city: "London",
//       });
//       db.customer.create({
//         fullName: "Stephen Hawking",
//         phone: "0044-3332589",
//         city: "Boston",
//       });
//     });
//     console.log("DB Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// })();

app.listen(PORT, () => {
  console.log(`Running on: http://localhost:${PORT}`);
});
