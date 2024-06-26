import express from "express";
import upload from "../../middlewares/uploadImage.mw.js";
import {
  deleteUserController,
  loginController,
  registerController,
  updateUserController,
  patchIsStreamerController,
  getAllUsersController,
  getUserByIdController,
  getUserFriendsController,
  addRemoveFriendController,
} from "../../controllers/users.controller.js";
import bodyValidationMiddleware from "../../middlewares/bodyValidation.mw.js";
import {
  loginValidation,
  registerValidation,
  editUserValidation,
} from "../../validation/validationAdapter.js";
import authMiddleware from "../../middlewares/auth.mw.js";
import adminOrOwn from "../../middlewares/adminOrOwn.mw.js";
import objectIdParamsValidationMiddleware from "../../middlewares/objectIdParamsValidation.mw.js";
import isAdminMiddleware from "../../middlewares/isAdmin.mw.js";
const router = express.Router();

// http://localhost:3030/api/users
router.get("/", authMiddleware, isAdminMiddleware, getAllUsersController);
router.get(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  getUserByIdController
);
router.post(
  "/register",
  upload.single("picture"),
  bodyValidationMiddleware(registerValidation),
  registerController
);

router.post(
  "/login",
  bodyValidationMiddleware(loginValidation),
  loginController
);

router.put(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  adminOrOwn,
  bodyValidationMiddleware(editUserValidation),
  updateUserController
);

router.patch(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  adminOrOwn,
  patchIsStreamerController
);

router.delete(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  adminOrOwn,
  deleteUserController
);
router.get("/:id/friends", authMiddleware, getUserFriendsController);
router.patch(":id/:friendID", authMiddleware, addRemoveFriendController);
export default router;
