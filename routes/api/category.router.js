import express from "express";
import {
  createCategoryController,
  deleteCategoryController,
  getAllCategoryController,
  getCategoryByIdController,
  updateCategoryController,
} from "../../controllers/category.controller.js";
import objectIdParamsValidationMiddleware from "../../middlewares/objectIdParamsValidation.mw.js";
import authMiddleware from "../../middlewares/auth.mw.js";
import isAdminMiddleware from "../../middlewares/isAdmin.mw.js";
import bodyValidationMiddleware from "../../middlewares/bodyValidation.mw.js";
import { createCategoryValidation } from "../../validation/validationAdapter.js";

const router = express.Router();

router.get("/", getAllCategoryController);
router.get("/:id", objectIdParamsValidationMiddleware, getCategoryByIdController);

router.post(
  "/",
  authMiddleware,
  bodyValidationMiddleware(createCategoryValidation),
  createCategoryController
);

router.put(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  isAdminMiddleware,
  bodyValidationMiddleware(createCategoryValidation),
  updateCategoryController
);

router.delete(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  isAdminMiddleware,
  deleteCategoryController
);

export default router;
