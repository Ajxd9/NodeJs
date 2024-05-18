import express from "express";
import {
  createFollowersController,
  deleteFollowersController,
  getAllFollowersController,
  getFollowersByIdController,
  updateFollowersController,
} from "../../controllers/followers.controller.js";
import objectIdParamsValidationMiddleware from "../../middlewares/objectIdParamsValidation.mw.js";
import authMiddleware from "../../middlewares/auth.mw.js";
import isAdminMiddleware from "../../middlewares/isAdmin.mw.js";
import bodyValidationMiddleware from "../../middlewares/bodyValidation.mw.js";
import { createFollowersValidation } from "../../validation/validationAdapter.js";

const router = express.Router();

router.get("/", getAllFollowersController);
router.get("/:id", objectIdParamsValidationMiddleware, getFollowersByIdController);

router.post(
  "/",
  authMiddleware,
  bodyValidationMiddleware(createFollowersValidation),
  createFollowersController
);

router.put(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  isAdminMiddleware,
  bodyValidationMiddleware(createFollowersValidation),
  updateFollowersController
);

router.delete(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  isAdminMiddleware,
  deleteFollowersController
);

export default router;
