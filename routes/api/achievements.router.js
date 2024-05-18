import express from "express";
import {
  createAchievementsController,
  deleteAchievementsController,
  getAllAchievementsController,
  getAchievementsByIdController,
  updateAchievementsController,
} from "../../controllers/achievements.controller.js";
import objectIdParamsValidationMiddleware from "../../middlewares/objectIdParamsValidation.mw.js";
import authMiddleware from "../../middlewares/auth.mw.js";
import isAdminMiddleware from "../../middlewares/isAdmin.mw.js";
import bodyValidationMiddleware from "../../middlewares/bodyValidation.mw.js";
import { createAchievementsValidation } from "../../validation/validationAdapter.js";

const router = express.Router();

router.get("/", getAllAchievementsController);
router.get("/:id", objectIdParamsValidationMiddleware, getAchievementsByIdController);

router.post(
  "/",
  authMiddleware,
  bodyValidationMiddleware(createAchievementsValidation),
  createAchievementsController
);

router.put(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  isAdminMiddleware,
  bodyValidationMiddleware(createAchievementsValidation),
  updateAchievementsController
);

router.delete(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  isAdminMiddleware,
  deleteAchievementsController
);

export default router;
