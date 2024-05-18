import express from "express";
import path from "node:path";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import logger from "morgan";
import helmet from "helmet";
import * as url from "url";
import cors from "cors";
import loggerAdapter from "./loggers/loggerAdapter.js";
import errorMiddleware from "./middlewares/error.mw.js";
import apiRouter from "./routes/api.router.js";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

let app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(loggerAdapter());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

/* FILE STORAGE */

/* ROUTES WITH FILES */
// app.post("/auth/register", upload.single("picture"), register);
// app.post("/posts", verifyToken, upload.single("picture"), createPost);

//error handling middleware
app.use("/api", apiRouter);
app.use(errorMiddleware);
export default app;
