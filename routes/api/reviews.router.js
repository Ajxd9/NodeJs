import express from "express";
import {
  createReviewsController,
  deleteReviewsController,
  getAllReviewsController,
  getReviewsByIdController,
  updateReviewsController,
} from "../../controllers/reviews.controller.js";
import objectIdParamsValidationMiddleware from "../../middlewares/objectIdParamsValidation.mw.js";
import authMiddleware from "../../middlewares/auth.mw.js";
import isAdminMiddleware from "../../middlewares/isAdmin.mw.js";
import bodyValidationMiddleware from "../../middlewares/bodyValidation.mw.js";
import { createReviewsValidation } from "../../validation/validationAdapter.js";

const router = express.Router();

router.get("/", getAllReviewsController);
router.get("/:id", objectIdParamsValidationMiddleware, getReviewsByIdController);

router.post(
  "/",
  authMiddleware,
  bodyValidationMiddleware(createReviewsValidation),
  createReviewsController
);

router.put(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  isAdminMiddleware,
  bodyValidationMiddleware(createReviewsValidation),
  updateReviewsController
);

router.delete(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  isAdminMiddleware,
  deleteReviewsController
);

export default router;
