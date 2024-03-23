import User from "./User.js";
const createUserMongo = (userData) => {
  let user = new User(userData);
  return user.save();
};

export { createUserMongo };
