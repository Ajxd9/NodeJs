import express from "express";
import {
  createSessionController,
  deleteSessionController,
  getAllSessionController,
  getSessionByIdController,
  updateSessionController,
} from "../../controllers/session.controller.js";
import objectIdParamsValidationMiddleware from "../../middlewares/objectIdParamsValidation.mw.js";
import authMiddleware from "../../middlewares/auth.mw.js";
import isAdminMiddleware from "../../middlewares/isAdmin.mw.js";
import bodyValidationMiddleware from "../../middlewares/bodyValidation.mw.js";
import { createSessionValidation } from "../../validation/validationAdapter.js";

const router = express.Router();

router.get("/", getAllSessionController);
router.get("/:id", objectIdParamsValidationMiddleware, getSessionByIdController);

router.post(
  "/",
  authMiddleware,
  bodyValidationMiddleware(createSessionValidation),
  createSessionController
);

router.put(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  isAdminMiddleware,
  bodyValidationMiddleware(createSessionValidation),
  updateSessionController
);

router.delete(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  isAdminMiddleware,
  deleteSessionController
);

export default router;
