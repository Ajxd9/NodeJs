import express from "express";
import {
  loginController,
  registerController,
} from "../../controllers/users.controller.js";
import bodyValidationMiddleware from "../../middlewares/bodyValidation.mw.js";
import {
  registerValidation,
  loginValidation,
  editUserValidation,
} from "../../validation/validationAdapter.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.json("users sub route");
});
router.post(
  "/login",
  bodyValidationMiddleware(loginValidation),
  loginController
);
router.post(
  "/register",
  bodyValidationMiddleware(registerValidation),
  registerController
);
router.get("/users/:userId", (req, res) => {
  res.send(`get user with id ${req.params.id}`);
});
router.post("/users", (req, res) => {
  res.send(`get All users`);
});
router.put(
  "/users/:userId",
  bodyValidationMiddleware(editUserValidation),
  (req, res) => {
    res.send(`user updated with id ${req.params.gameId}`);
  }
);
router.patch("/users/:userId", (req, res) => {
  res.send(`changed status`);
});
router.delete("/users/:userId", (req, res) => {
  res.send(`user with id is deleted ${req.params.userId}`);
});
export default router;
