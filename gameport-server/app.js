import express from "express";
import path from "node:path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import * as url from "url";
import chalk from "chalk";
import errorMiddleware from "./middlewares/error.mw.js";
import apiRouter from "./routes/api.js";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

let app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//error handling middleware
app.use("/api", apiRouter);
app.use(errorMiddleware);
export default app;
