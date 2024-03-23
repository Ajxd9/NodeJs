import express from "express";
import usersRouter from "./api/users.router.js";
import gamesRouter from "./api/games.router.js";
import handleError from "../utils/handleError.js";
const router = express.Router();

router.use("/users", usersRouter);
router.use("/games", gamesRouter);
router.get("/", (req, res) => {
  res.send("sub router");
});
router.use((req, res) => {
  handleError(res, 404, "not found");
});
export default router;
