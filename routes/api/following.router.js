import express from "express";
import {
  createFollowingController,
  deleteFollowingController,
  getAllFollowingController,
  getFollowingByIdController,
  updateFollowingController,
} from "../../controllers/following.controller.js";
import objectIdParamsValidationMiddleware from "../../middlewares/objectIdParamsValidation.mw.js";
import authMiddleware from "../../middlewares/auth.mw.js";
import isAdminMiddleware from "../../middlewares/isAdmin.mw.js";
import bodyValidationMiddleware from "../../middlewares/bodyValidation.mw.js";
import { createFollowingValidation } from "../../validation/validationAdapter.js";

const router = express.Router();

router.get("/", getAllFollowingController);
router.get("/:id", objectIdParamsValidationMiddleware, getFollowingByIdController);

router.post(
  "/",
  authMiddleware,
  bodyValidationMiddleware(createFollowingValidation),
  createFollowingController
);

router.put(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  isAdminMiddleware,
  bodyValidationMiddleware(createFollowingValidation),
  updateFollowingController
);

router.delete(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  isAdminMiddleware,
  deleteFollowingController
);

export default router;
