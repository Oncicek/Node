import { NextFunction, Request, Response } from "express";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(bodyParser.json());

app.post("/kocka", (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body);
  res.send(req.body);
});

app.use("/", (req: Request, res: Response, next: NextFunction) => {
  console.log("druhej");
  res.send("<div>TADY JE VSETKO!!</div>");
});

app.listen(3000);
