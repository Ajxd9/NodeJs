import handleError from "../utils/handleError.js";

const adminOrStreamerMiddleware = (req, res, next) => {
  if (!req.userData) {
    //!these functions should be in deferent place
    throw new Error("you must be logged in");
  }
  if (req.userData.isAdmin || req.userData.isStreamer) {
    next();
  } else {
    handleError(res, 401, "you not allowed to do this action");
  }
};
export default adminOrStreamerMiddleware;