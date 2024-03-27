import {
  createGame,
  deleteGame,
  getAllGames,
  getAllMyGames,
  getGameById,
  updateGame,
  updateLikeGame,
} from "../model/dbAdapter.js";
import handleError from "../utils/handleError.js";

const getAllGamesController = async (req, res) => {
  try {
    let games = await getAllGames();
    res.json(games);
  } catch (err) {
    console.log(err);
  }
};

const getGameByIdController = async (req, res) => {
  try {
    let game = await getGameById(req.params.id);
    res.json(game);
  } catch (err) {
    console.log(err);
    handleError(res, 400, err.message);
  }
};

const getMyGamesController = async (req, res) => {
  const userId = req.userData._id;
  try {
    let myGames = await getAllMyGames(userId);
    return res.json(myGames);
  } catch (err) {
    console.log(err);
    handleError(res, 400, err.message);
  }
};

const createGameController = async (req, res) => {
  try {
    const userId = req.userData._id;
    req.body.user_id = userId;
    let newGame = await createGame(req.body);
    return res.json(newGame);
  } catch (err) {
    console.log(err);
    handleError(res, 400, err.message);
  }
};

const updateGameController = async (req, res) => {
  try {
    const gameFromDb = await getGameById(req.params.id);
    let { user_id } = gameFromDb;
    user_id = user_id + "";
    if (!gameFromDb) {
      throw new Error("Game not found");
    }
    if (req.userData.isBusiness && req.userData._id !== user_id) {
      throw new Error(
        "You are not allowed to update this game, you must be the owner of the game"
      );
    }
    const updatedGame = await updateGame(req.params.id, req.body);
    return res.json(updatedGame);
  } catch (err) {
    console.log(err);
    handleError(res, 400, err.message);
  }
};

const patchLikeController = async (req, res) => {
  try {
    const gameFromDb = await getGameById(req.params.id);
    if (!gameFromDb) {
      throw new Error("Game not found");
    }
    let likes = [...gameFromDb.likes];
    if (likes.includes(req.userData._id)) {
      likes = likes.filter((id) => id !== req.userData._id);
    } else {
      likes.push(req.userData._id);
    }
    const updatedGameFromDb = await updateLikeGame(req.params.id, likes);
    console.log("updatedGameFromDb", updatedGameFromDb);
    return res.json(updatedGameFromDb);
  } catch (err) {
    console.log(err);
    handleError(res, 400, err.message);
  }
};

const patchSerialNumberController = async (req, res) => {
  try {
    const gameFromDb = await getGameById(req.params.id);
    if (!gameFromDb) {
      throw new Error("Game not found");
    }
    //check serialNumber, also check if unique
    gameFromDb.serialNumber = req.body.serialNumber;
    let updatedGame = await updateGame(req.params.id, gameFromDb);
    return res.json(updatedGame);
  } catch (err) {
    console.log(err);
    handleError(res, 400, err.message);
  }
};

const deleteGameController = async (req, res) => {
  try {
    const gameFromDb = await getGameById(req.params.id);
    if (!gameFromDb) {
      throw new Error("Game not found");
    }
    let { user_id } = gameFromDb;
    user_id = user_id + "";
    if (req.userData.isBusiness && req.userData._id !== user_id) {
      throw new Error(
        "You are not allowed to update this game, you must be the owner of the game"
      );
    }
    const gameAfterDeleteFromDb = await deleteGame(req.params.id);
    return res.json(gameAfterDeleteFromDb);
  } catch (err) {
    console.log(err);
    handleError(res, 400, err.message);
  }
};

export {
  getAllGamesController,
  getGameByIdController,
  getMyGamesController,
  createGameController,
  updateGameController,
  patchLikeController,
  patchSerialNumberController,
  deleteGameController,
};
