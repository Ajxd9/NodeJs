import express from "express";
import {
  createCommentsController,
  deleteCommentsController,
  getAllCommentsController,
  getCommentsByIdController,
  updateCommentsController,
} from "../../controllers/comments.controller.js";
import objectIdParamsValidationMiddleware from "../../middlewares/objectIdParamsValidation.mw.js";
import authMiddleware from "../../middlewares/auth.mw.js";
import isAdminMiddleware from "../../middlewares/isAdmin.mw.js";
import bodyValidationMiddleware from "../../middlewares/bodyValidation.mw.js";
import { createCommentsValidation } from "../../validation/validationAdapter.js";

const router = express.Router();

router.get("/", getAllCommentsController);
router.get("/:id", objectIdParamsValidationMiddleware, getCommentsByIdController);

router.post(
  "/",
  authMiddleware,
  bodyValidationMiddleware(createCommentsValidation),
  createCommentsController
);

router.put(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  isAdminMiddleware,
  bodyValidationMiddleware(createCommentsValidation),
  updateCommentsController
);

router.delete(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  isAdminMiddleware,
  deleteCommentsController
);

export default router;
