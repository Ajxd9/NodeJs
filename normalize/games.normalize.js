import generateUniqueNumber from "../utils/generateUniqueNumber.js";
const normalizeGame = async (game) => {
  let coverImage;

  coverImage = {
    ...game.coverImage,
    url:
      game.coverImage.url ||
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    alt: game.coverImage.alt || "default filler",
  };
  if (game.coverImage.alt && !game.coverImage.url) {
    coverImage = {
      url: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      alt: "avatar",
    };
  }
  try {
    return {
      ...game,
      systemRequirements: game.systemRequirements || undefined,
      multiplayer: game.multiplayer || false,
      onlinePlay: game.onlinePlay || false,
      offlinePlay: game.offlinePlay || false,
      singlePlayer: game.singlePlayer || false,
      price: game.price || 0,
      coverImage,
      screenshots: game.screenshots || [],
      serialNumber: game.serialNumber || (await generateUniqueNumber()),
    };
  } catch (err) {
    return Promise.reject(err);
  }
};

export default normalizeGame;
