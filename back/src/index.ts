import express, { Express, Request, Response } from "express";
// const db = require("./models");

const app: Express = express();
const PORT = process.env.PORT || 4000;
require("dotenv").config();

// body parser "json"
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Typescript and Node.js works!");
});

// routes
require("./routes/auth.routes")(app);

// (async () => {
//   try {
//     await db.sqlConnection.sync({ force: true }).then(() => {
//       db.user.create({
//         username: "admin",
//         email: "test@gmail.com",
//         password: "1234"
//       })
//     })
//     console.log("DB Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// })();

app.listen(PORT, () => {
  console.log(`Running on: http://localhost:${PORT}`);
});
