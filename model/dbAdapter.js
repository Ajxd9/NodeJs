import connectToMongo from "./mongodb/dbConnect.js";
import {
  createUserMongo,
  deleteUserMongo,
  getUserByEmailMongo,
  patchIsStreamerMongo,
  updateUserMongo,
  getAllUsersMongo,
  getUserByIdMongo,
  getUserFriendsMongo,
  addRemoveFriendMongo,
} from "./mongodb/users/userService.js";
import {
  createGameMongo,
  getGameBySerialNumberMongo,
  getAllGamesMongo,
  getGameByIdMongo,
  getAllMyGamesMongo,
  updateGameMongo,
  updateLikeGameMongo,
  deleteGameMongo,
} from "./mongodb/games/gamesService.js";
import normalizeUser from "./../normalize/users.normalize.js";
import normalizeGame from "../normalize/games.normalize.js";

const DB = "mongo";
const connectToDB = () => {
  if (DB === "mongo") {
    return connectToMongo();
  }
};
const getAllUsers = () => {
  if (DB === "mongo") {
    return getAllUsersMongo();
  }
};
const getUserById = (id) => {
  if (DB === "mongo") {
    return getUserByIdMongo(id);
  }
};
const createUser = (user) => {
  user = normalizeUser(user);
  if (DB === "mongo") {
    return createUserMongo(user);
  }
};

const updateUser = (id, user) => {
  user = normalizeUser(user);
  if (DB === "mongo") {
    return updateUserMongo(id, user);
  }
};

const getUserByEmail = (email) => {
  if (DB === "mongo") {
    return getUserByEmailMongo(email);
  }
};

const deleteUser = (id) => {
  if (DB === "mongo") {
    return deleteUserMongo(id);
  }
};

const patchIsStreamer = (id, isStreamer) => {
  if (DB === "mongo") {
    return patchIsStreamerMongo(id, isStreamer);
  }
};
const getUserFriends =(id)=>{
  if (DB === "mongo") {
    return getUserFriendsMongo(id);
    }
}
const addRemoveFriend =(id,friendID)=>{
  if (DB === "mongo") {
    return addRemoveFriendMongo(id,friendID);
  }
}
//---------games---------
const createGame = async (game) => {
  game = await normalizeGame(game);
  if (DB === "mongo") {
    return createGameMongo(game);
  }
};
const getGameBySerialNumber = (serialNumber) => {
  if (DB === "mongo") {
    return getGameBySerialNumberMongo(serialNumber);
  }
};

const getAllGames = () => {
  if (DB === "mongo") {
    return getAllGamesMongo();
  }
};

const getGameById = (id) => {
  if (DB === "mongo") {
    return getGameByIdMongo(id);
  }
};

const getAllMyGames = (user_id) => {
  if (DB === "mongo") {
    return getAllMyGamesMongo(user_id);
  }
};

const updateGame = (game_id, game) => {
  if (DB === "mongo") {
    return updateGameMongo(game_id, game);
  }
};

const updateLikeGame = (game_id, likes) => {
  if (DB === "mongo") {
    return updateLikeGameMongo(game_id, likes);
  }
};

const deleteGame = (id) => {
  if (DB === "mongo") {
    return deleteGameMongo(id);
  }
};
export default connectToDB;
export {
  createUser,
  createGame,
  getGameBySerialNumber,
  getAllGames,
  getUserByEmail,
  updateUser,
  deleteUser,
  patchIsStreamer,
  getGameById,
  getAllMyGames,
  updateGame,
  updateLikeGame,
  deleteGame,
  getAllUsers,
  getUserById,
  getUserFriends,
  addRemoveFriend,
};
