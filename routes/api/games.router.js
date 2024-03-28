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
import authMiddleware from "../../middlewares/auth.mw.js";
import isStreamerMiddleware from "../../middlewares/isStreamer.mw.js";
import bodyValidationMiddleware from "../../middlewares/bodyValidation.mw.js";
import { createGameValidation } from "../../validation/validationAdapter.js";
import adminOrStreamerMiddleware from "../../middlewares/adminOrStreamer.mw.js";
import isAdminMiddleware from "../../middlewares/isAdmin.mw.js";
const router = express.Router();

router.get("/", getAllGamesController);
router.get("/my-games", authMiddleware, getMyGamesController);
router.get("/:id", objectIdParamsValidationMiddleware, getGameByIdController);

router.post(
  "/",
  authMiddleware,
  isStreamerMiddleware,
  bodyValidationMiddleware(createGameValidation),
  createGameController
);

router.put(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  adminOrStreamerMiddleware,
  bodyValidationMiddleware(createGameValidation),
  updateGameController
);

router.patch(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  patchLikeController
);

router.patch(
  "/serial-number/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  isAdminMiddleware,
  patchSerialNumberController
);

router.delete(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  adminOrStreamerMiddleware,
  deleteGameController
);
export default router;
