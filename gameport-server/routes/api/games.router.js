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
router.get("/:gameId", objectIdParamsValidationMiddleware,getGameByIdController);
router.get("/my-games", getMyGamesController);
router.post("/",bodyValidationMiddleware(createGameValidation), createGameController);
router.put("/:gameId", bodyValidationMiddleware(createGameValidation),updateGameController);
router.patch("/:gameId", patchLikeController);
router.patch("/serial-number/:gameId", patchSerialNumberController);
router.delete("/:gameId", deleteGameController);
export default router;
