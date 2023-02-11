import express, {Express, Request, Response} from "express";

const app: Express = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req: Request, res: Response) => {
  res.send("Typescript and Node.js works!");
});

app.listen(PORT, () => {
  console.log(`Running on: http://localhost:${PORT}`);
});
