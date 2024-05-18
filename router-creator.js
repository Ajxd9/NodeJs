// Function to create router files
import fs from "fs";
import path from "path";
function createRouterFile(collectionName, directory) {
  // Ensure the directory exists
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }

  const filePath = path.join(directory, `${collectionName}.router.js`);
  const fileContent = `import express from "express";
import {
  create${capitalize(collectionName)}Controller,
  delete${capitalize(collectionName)}Controller,
  getAll${capitalize(collectionName)}Controller,
  get${capitalize(collectionName)}ByIdController,
  update${capitalize(collectionName)}Controller,
} from "../../controllers/${collectionName}.controller.js";
import objectIdParamsValidationMiddleware from "../../middlewares/objectIdParamsValidation.mw.js";
import authMiddleware from "../../middlewares/auth.mw.js";
import isAdminMiddleware from "../../middlewares/isAdmin.mw.js";
import bodyValidationMiddleware from "../../middlewares/bodyValidation.mw.js";
import { create${capitalize(
    collectionName
  )}Validation } from "../../validation/validationAdapter.js";

const router = express.Router();

router.get("/", getAll${capitalize(collectionName)}Controller);
router.get("/:id", objectIdParamsValidationMiddleware, get${capitalize(
    collectionName
  )}ByIdController);

router.post(
  "/",
  authMiddleware,
  bodyValidationMiddleware(create${capitalize(collectionName)}Validation),
  create${capitalize(collectionName)}Controller
);

router.put(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  isAdminMiddleware,
  bodyValidationMiddleware(create${capitalize(collectionName)}Validation),
  update${capitalize(collectionName)}Controller
);

router.delete(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  isAdminMiddleware,
  delete${capitalize(collectionName)}Controller
);

export default router;
`;

  fs.writeFileSync(filePath, fileContent);
  console.log(`Created file: ${filePath}`);
}

// Function to capitalize the first letter of a string
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Usage example
const collections = [
  "category",
  "discounts",
  "posts",
  "stats",
  "session",
  "reviews",
  "likes",
  "comments",
  "followers",
  "following",
  "trending",
  "achievements",
  "notifications",
];

const directory = "./routes/api/";

collections.forEach((collection) => {
  createRouterFile(collection, directory);
});
