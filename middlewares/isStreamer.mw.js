import handleError from "../utils/handleError.js";

const isStreamerMiddleware = async (req, res, next) => {
  if (!req.userData) {
    //dont forget to add auth mw before
    throw new Error("error 0x19856");
  }
  if (!req.userData.isStreamer) {
    //im not a biz
    return handleError(res, 401, "You are not a Streamer user");
  }
  next();
};
export default isStreamerMiddleware;
