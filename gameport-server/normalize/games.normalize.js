import generateUniqueNumber from "../utils/generateUniqueNumber.js";

const normalizeGame = async (game) => {
  try {
    return {
      ...game,
      systemRequirements: game.systemRequirements || null,
      multiplayer: game.multiplayer || false,
      onlinePlay: game.onlinePlay || false,
      offlinePlay: game.offlinePlay || false,
      singlePlayer: game.singlePlayer || false,
      price: game.price || 0,
      coverImage: game.coverImage || "https://example.com/default_cover.jpg",
      screenshots: game.screenshots || [],
    };
  } catch (err) {
    return Promise.reject(err);
  }
};

export default normalizeGame;
