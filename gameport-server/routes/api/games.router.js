import express from "express";
import {
  createGameController,
  deleteGameController,
  getAllGamesController,
  getGameByIdController,
  getMyGamesController,
  patchSerialNumberController,
  patchLikeController,
  updateGameController,
} from "../../controllers/games.controller.js";
import objectIdParamsValidationMiddleware from "../../middlewares/objectIdParamsValidation.mw.js";
//import authMiddleware from "../../middlewares/auth.mw.js";
//import isStreamerMiddleware from "../../middlewares/isStreamer.mw.js";
import bodyValidationMiddleware from "../../middlewares/bodyValidation.mw.js";
import { createGameValidation } from "../../validation/validationAdapter.js";
//import adminOrBizMiddleware from "../../middlewares/adminOrBiz.mw.js";
//import isAdminMiddleware from "../../middlewares/isAdmin.mw.js";
const router = express.Router();

router.get("/", getAllGamesController);
router.get("/:gameId", (req, res) => {
  res.send(`game with id ${req.params.gameId}`);
});
router.get("/games/my-games", (req, res) => {
  res.send(`Games add to playlist by user`);
});
router.post("/games", (req, res) => {
  console.log(req.body);
  res.send(`game created`);
});
router.put("/games/:gameId", (req, res) => {
  res.send(`game updated with id ${req.params.gameId}`);
});
router.patch("/games/:gameId", (req, res) => {
  res.send(`game liked`);
});
router.delete("/games/:gameId", (req, res) => {
  res.send(`game is deleted with id${req.params.gameId}`);
});
export default router;
