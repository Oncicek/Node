import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { router as adminRoutes } from "./routes/admin.js";
import { router as shopRoutes } from "./routes/shop.js";
import { router as notFoundRoute } from "./routes/404.js";
import { engine } from "express-handlebars";
import { join } from "path";
import { getDirname } from "./utils/utils.js";

const app = express();

app.engine(
  "handlebars",
  engine({
    defaultLayout: "main-layout",
    extname: ".handlebars",
  })
);
app.set("view engine", "handlebars");
app.set("views", join(getDirname(import.meta.url), "views"));

app.use(express.static("public"));

app.use(
  cors({
    origin: "http://localhost:4200",
  })
);

app.use(bodyParser.json());

app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);
app.use(notFoundRoute);

app.listen(3000);
