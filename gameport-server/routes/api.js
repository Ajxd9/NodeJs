import express from "express";
import usersRouter from "./api/users.js";
import gamesRouter from "./api/games.js";
const router = express.Router();

router.use("/users", usersRouter);
router.use("/games", gamesRouter);
router.get("/", (req, res) => {
  res.send("sub router");
});
export default router;
