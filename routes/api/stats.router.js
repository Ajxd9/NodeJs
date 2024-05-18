import express from "express";
import {
  createStatsController,
  deleteStatsController,
  getAllStatsController,
  getStatsByIdController,
  updateStatsController,
} from "../../controllers/stats.controller.js";
import objectIdParamsValidationMiddleware from "../../middlewares/objectIdParamsValidation.mw.js";
import authMiddleware from "../../middlewares/auth.mw.js";
import isAdminMiddleware from "../../middlewares/isAdmin.mw.js";
import bodyValidationMiddleware from "../../middlewares/bodyValidation.mw.js";
import { createStatsValidation } from "../../validation/validationAdapter.js";

const router = express.Router();

router.get("/", getAllStatsController);
router.get("/:id", objectIdParamsValidationMiddleware, getStatsByIdController);

router.post(
  "/",
  authMiddleware,
  bodyValidationMiddleware(createStatsValidation),
  createStatsController
);

router.put(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  isAdminMiddleware,
  bodyValidationMiddleware(createStatsValidation),
  updateStatsController
);

router.delete(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  isAdminMiddleware,
  deleteStatsController
);

export default router;
