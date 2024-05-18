import express from "express";
import {
  createDiscountsController,
  deleteDiscountsController,
  getAllDiscountsController,
  getDiscountsByIdController,
  updateDiscountsController,
} from "../../controllers/discounts.controller.js";
import objectIdParamsValidationMiddleware from "../../middlewares/objectIdParamsValidation.mw.js";
import authMiddleware from "../../middlewares/auth.mw.js";
import isAdminMiddleware from "../../middlewares/isAdmin.mw.js";
import bodyValidationMiddleware from "../../middlewares/bodyValidation.mw.js";
import { createDiscountsValidation } from "../../validation/validationAdapter.js";

const router = express.Router();

router.get("/", getAllDiscountsController);
router.get("/:id", objectIdParamsValidationMiddleware, getDiscountsByIdController);

router.post(
  "/",
  authMiddleware,
  bodyValidationMiddleware(createDiscountsValidation),
  createDiscountsController
);

router.put(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  isAdminMiddleware,
  bodyValidationMiddleware(createDiscountsValidation),
  updateDiscountsController
);

router.delete(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  isAdminMiddleware,
  deleteDiscountsController
);

export default router;
