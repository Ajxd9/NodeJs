import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.json("all games");
});
router.get("/:gameId", (req, res) => {
  res.send(`game with id ${req.params.gameId}`);
});
router.get("/games/my-games", (req, res) => {
  res.send(`Games add to playlist by user`);
});
router.post("/games", (req, res) => {
  console.log(req.body);
  res.send(`card created`);
});
router.put("/games/:gameId", (req, res) => {
  res.send(`game updated with id ${req.params.gameId}`);
});
router.patch("/games/:gameId", (req, res) => {
  res.send(`game liked`);
});
router.delete("/games/:gameId", (req, res) => {
  res.send(`game is deleted with id${req.params.gameId}`);
});
export default router;
