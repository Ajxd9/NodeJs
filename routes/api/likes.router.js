import express from "express";
import {
  createLikesController,
  deleteLikesController,
  getAllLikesController,
  getLikesByIdController,
  updateLikesController,
} from "../../controllers/likes.controller.js";
import objectIdParamsValidationMiddleware from "../../middlewares/objectIdParamsValidation.mw.js";
import authMiddleware from "../../middlewares/auth.mw.js";
import isAdminMiddleware from "../../middlewares/isAdmin.mw.js";
import bodyValidationMiddleware from "../../middlewares/bodyValidation.mw.js";
import { createLikesValidation } from "../../validation/validationAdapter.js";

const router = express.Router();

router.get("/", getAllLikesController);
router.get("/:id", objectIdParamsValidationMiddleware, getLikesByIdController);

router.post(
  "/",
  authMiddleware,
  bodyValidationMiddleware(createLikesValidation),
  createLikesController
);

router.put(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  isAdminMiddleware,
  bodyValidationMiddleware(createLikesValidation),
  updateLikesController
);

router.delete(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  isAdminMiddleware,
  deleteLikesController
);

export default router;
