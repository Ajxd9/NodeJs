import express from "express";
import {
  createNotificationsController,
  deleteNotificationsController,
  getAllNotificationsController,
  getNotificationsByIdController,
  updateNotificationsController,
} from "../../controllers/notifications.controller.js";
import objectIdParamsValidationMiddleware from "../../middlewares/objectIdParamsValidation.mw.js";
import authMiddleware from "../../middlewares/auth.mw.js";
import isAdminMiddleware from "../../middlewares/isAdmin.mw.js";
import bodyValidationMiddleware from "../../middlewares/bodyValidation.mw.js";
import { createNotificationsValidation } from "../../validation/validationAdapter.js";

const router = express.Router();

router.get("/", getAllNotificationsController);
router.get("/:id", objectIdParamsValidationMiddleware, getNotificationsByIdController);

router.post(
  "/",
  authMiddleware,
  bodyValidationMiddleware(createNotificationsValidation),
  createNotificationsController
);

router.put(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  isAdminMiddleware,
  bodyValidationMiddleware(createNotificationsValidation),
  updateNotificationsController
);

router.delete(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  isAdminMiddleware,
  deleteNotificationsController
);

export default router;
