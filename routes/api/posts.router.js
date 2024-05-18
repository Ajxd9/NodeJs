import express from "express";
import {
  createPostsController,
  deletePostsController,
  getAllPostsController,
  getPostsByIdController,
  updatePostsController,
} from "../../controllers/posts.controller.js";
import objectIdParamsValidationMiddleware from "../../middlewares/objectIdParamsValidation.mw.js";
import authMiddleware from "../../middlewares/auth.mw.js";
import isAdminMiddleware from "../../middlewares/isAdmin.mw.js";
import bodyValidationMiddleware from "../../middlewares/bodyValidation.mw.js";
import { createPostsValidation } from "../../validation/validationAdapter.js";

const router = express.Router();

router.get("/", getAllPostsController);
router.get("/:id", objectIdParamsValidationMiddleware, getPostsByIdController);

router.post(
  "/",
  authMiddleware,
  bodyValidationMiddleware(createPostsValidation),
  createPostsController
);

router.put(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  isAdminMiddleware,
  bodyValidationMiddleware(createPostsValidation),
  updatePostsController
);

router.delete(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  isAdminMiddleware,
  deletePostsController
);

export default router;
