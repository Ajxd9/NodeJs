import User from "./User.js";

const createUserMongo = (userData) => {
  let user = new User(userData);
  return user.save();
};
const getAllUsersMongo = () => {
  return User.find({}, { password: 0 });
};

const getUserByIdMongo = (id) => {
  return User.findById(id, { password: 0 });
};

const getUserByEmailMongo = (email) => {
  return User.findOne({ email });
};

const updateUserMongo = (id, userData) => {
  return User.findByIdAndUpdate(id, userData, { new: true });
};

const patchIsStreamerMongo = (id, isStreamer) => {
  return User.updateOne({ _id: id }, { isStreamer: isStreamer });
};

const deleteUserMongo = (id) => {
  return User.findByIdAndDelete(id);
};
const getUserFriendsMongo =(id)=>{
  return User.findById(id).populate('friends');
}
const addRemoveFriendMongo =(id,friendID)=>{
  return User.findByIdAndUpdate(id,{$push:{friends:friendID}},{new:true});
}
export {
  createUserMongo,
  getAllUsersMongo,
  getUserByIdMongo,
  getUserByEmailMongo,
  updateUserMongo,
  deleteUserMongo,
  patchIsStreamerMongo,
  getUserFriendsMongo,
  addRemoveFriendMongo
};
