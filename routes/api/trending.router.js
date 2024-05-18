import express from "express";
import {
  createTrendingController,
  deleteTrendingController,
  getAllTrendingController,
  getTrendingByIdController,
  updateTrendingController,
} from "../../controllers/trending.controller.js";
import objectIdParamsValidationMiddleware from "../../middlewares/objectIdParamsValidation.mw.js";
import authMiddleware from "../../middlewares/auth.mw.js";
import isAdminMiddleware from "../../middlewares/isAdmin.mw.js";
import bodyValidationMiddleware from "../../middlewares/bodyValidation.mw.js";
import { createTrendingValidation } from "../../validation/validationAdapter.js";

const router = express.Router();

router.get("/", getAllTrendingController);
router.get("/:id", objectIdParamsValidationMiddleware, getTrendingByIdController);

router.post(
  "/",
  authMiddleware,
  bodyValidationMiddleware(createTrendingValidation),
  createTrendingController
);

router.put(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  isAdminMiddleware,
  bodyValidationMiddleware(createTrendingValidation),
  updateTrendingController
);

router.delete(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  isAdminMiddleware,
  deleteTrendingController
);

export default router;
