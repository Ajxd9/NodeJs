import express from "express";
import {
  createPostsController,
  deletePostsController,
  getAllPostsController,
  getPostsByIdController,
  updatePostsController,
  getUserPosts,
  likePost,
  getFeedPosts,
} from "../../controllers/posts.controller.js";
import objectIdParamsValidationMiddleware from "../../middlewares/objectIdParamsValidation.mw.js";
import authMiddleware from "../../middlewares/auth.mw.js";
import isAdminMiddleware from "../../middlewares/isAdmin.mw.js";
import bodyValidationMiddleware from "../../middlewares/bodyValidation.mw.js";
import { createPostsValidation } from "../../validation/validationAdapter.js";
import upload from "../../middlewares/uploadImage.mw.js";

const router = express.Router();

router.get("/posts", isAdminMiddleware,getAllPostsController);
router.get("/",authMiddleware, getFeedPosts);
router.get("/:userId/posts",authMiddleware,getUserPosts);
router.get("/:id", objectIdParamsValidationMiddleware, getPostsByIdController);

router.post(
  "/",
  authMiddleware,
  upload.single("picture"),
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
router.patch("/:id/like",authMiddleware,likePost);
export default router;
