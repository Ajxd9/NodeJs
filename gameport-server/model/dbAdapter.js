import connectToMongo from "./mongoDB/dbConnect.js";
import { createUserMongo } from "./mongoDB/users/userService.js";
const DB = "mongo";
const connectToDB = () => {
  if (DB === "mongo") {
    return connectToMongo();
  }
};

const createUser = (user) => {
  if (DB === "mongo") {
    return createUserMongo(user);
  }
};
export default connectToDB;
export { createUser };
