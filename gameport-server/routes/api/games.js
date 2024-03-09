import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("all games");
});
router.get("/games/:gameId", (req, res) => {
  res.send(`card with id ${req.params.gameId}`);
});
router.get("/games/my-games", (req, res) => {
  res.send(`Games add to playlist by user`);
});
router.post("/games", (req, res) => {
  console.log(req.body);
  res.send(`card created`);
});
router.put("/games/:gameId", (req, res) => {
  res.send(`card updated with id ${req.params.gameId}`);
});
router.patch("/games/:gameId", (req, res) => {
  res.send(`card liked`);
});
router.delete("/games/:gameId", (req, res) => {
  res.send(`card with id is deleted ${req.params.gameId}`);
});
export default router;
