import debug from "debug";
const log = debug("app:model:gameService");
import Game from "./Game.js";

const createGameMongo = (gameData) => {
  log(gameData);
  let game = new Game(gameData);
  return game.save();
};

const getAllGamesMongo = () => {
  return Game.find();
};

const getGameByIdMongo = (id) => {
  console.log("id from mongo", id);
  return Game.findById(id);
};
const getGameBySerialNumberMongo = (serialNumber) => {
  return Game.findOne({ serialNumber });
};
const getAllMyGamesMongo = (user_id) => {
  return Game.find({ user_id });
};

const updateGameMongo = (id, gameData) => {
  return Game.findByIdAndUpdate(id, gameData, { new: true });
};

const updateLikeGameMongo = (id, likes) => {
  return Game.findByIdAndUpdate(id, { likes }, { new: true });
};

const deleteGameMongo = (id) => {
  return Game.findByIdAndDelete(id);
};
export {
  createGameMongo,
  getAllGamesMongo,
  getGameByIdMongo,
  getGameBySerialNumberMongo,
  getAllMyGamesMongo,
  updateGameMongo,
  updateLikeGameMongo,
  deleteGameMongo,
};
