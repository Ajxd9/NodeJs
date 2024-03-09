import express from "express";
const router = express.Router();

router.post("/login", (req, res) => {
  res.send("user logins");
});
router.post("/register", (req, res) => {
  res.send(`user created`);
});
router.get("/users/:userId", (req, res) => {
  res.send(`get user with id ${req.params.id}`);
});
router.post("/users", (req, res) => {
  res.send(`get All users`);
});
router.put("/users/:userId", (req, res) => {
  res.send(`user updated with id ${req.params.gameId}`);
});
router.patch("/users/:userId", (req, res) => {
  res.send(`changed status`);
});
router.delete("/users/:userId", (req, res) => {
  res.send(`user with id is deleted ${req.params.userId}`);
});
export default router;
