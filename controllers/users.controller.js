import {
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser,
  patchIsStreamer,
  getAllUsers,
  getUserById,
  getUserFriends,
  addRemoveFriend,
} from "../model/dbAdapter.js";
import handleError from "../utils/handleError.js";
import { generateHash, cmpHash } from "../utils/bcrypt.js";
import { generateToken } from "../token/jwt.js";
import User from "../model/mongodb/users/User.js";

const getAllUsersController = async (req, res) => {
  try {
    let users = await getAllUsers();
    res.json(users);
  } catch (err) {
    console.log(err);
  }
};
const getUserByIdController = async (req, res) => {
  try {
    let user = await getUserById(req.params.id);
    res.json(user);
  } catch (err) {
    console.log(err);
  }
};
const registerController = async (req, res) => {
  try {
    let userFromDB = await getUserByEmail(req.body.email);
    if (userFromDB) throw new Error("user already exists");
    let passwordHash = await generateHash(req.body.password);
    req.body.password = passwordHash;
    let newUser = await createUser(req.body);
    newUser.password = undefined;
    delete newUser.password;
    console.log(newUser);
    res.json(newUser);
  } catch (err) {
    console.log(err);
    handleError(res, 400, err.message);
  }
};

const loginController = async (req, res) => {
  try {
    let userFromDB = await getUserByEmail(req.body.email);
    if (!userFromDB) throw new Error("invalid email or password");
    let passwordMatch = await cmpHash(req.body.password, userFromDB.password);
    if (!passwordMatch) throw new Error("invalid email or password");
    let token = await generateToken({
      _id: userFromDB._id,
      isAdmin: userFromDB.isAdmin,
      isStreamer: userFromDB.isStreamer,
    });
    res.json(token);
  } catch (err) {
    console.log(err);
    handleError(res, 400, err.message);
  }
};

const updateUserController = async (req, res) => {
  try {
    if (!req.userData.isAdmin && req.userData._id !== req.params.id)
      throw new Error("you not allowed to update");
    let userFromDB = await updateUser(req.params.id, req.body);
    userFromDB.password = undefined;
    res.json(userFromDB);
  } catch (err) {
    console.log(err);
    handleError(res, 400, err.message);
  }
};

const patchIsStreamerController = async (req, res) => {
  try {
    let userFromDB = await patchIsStreamer(req.params.id, req.body.isStreamer);
    userFromDB.password = undefined;
    res.json(userFromDB);
  } catch (err) {
    console.log(err);
    handleError(res, 400, err.message);
  }
};

const deleteUserController = async (req, res) => {
  try {
    let userFromDB = await deleteUser(req.params.id);
    userFromDB.password = undefined;
    res.json(userFromDB);
  } catch (err) {
    console.log(err);
    handleError(res, 400, err.message);
  }
};
const getUserFriendsController= async(req,res)=>{
  
  try{
    const { id } = req.params;
    const user =getUserById(id);
    userFromDB.password = undefined;
    const friends = await Promise.all(
      user.friends.map((id)=> User.findById(id))
    );
    const formattedFriends = friends.map(
      ({_id,firstName,lastName,occupation,location,picturePath})=>{
        return {_id,firstName,lastName,occupation,location,picturePath};
      });
      res.status(200).json(formattedFriends);
  }catch(err){
    console.log(err);
    handleError(res,400,err.message);
  }
};
const addRemoveFriendsController= async(req,res)=>{
  try{
    const { id,friendId } = req.params;
    const user =getUserById(id);
    userFromDB.password = undefined;
    const friend=getUserById(friendId);
    if(user.friends.includes(friendId)){
      user.friend = user.friends.filter((id)=>id !==friendId);
      friend.friends=friend.friends.filter((id)=>id !==id);
    }else{
      user.friends.push(friendId);
      friend.friends.push(id);
    }
    await user.save();
    await friend.save();
    const friends = await Promise.all(
      user.friends.map((id)=> User.findById(id))
    );
    const formattedFriends = friends.map(
      ({_id,firstName,lastName,occupation,location,picturePath})=>{
        return {_id,firstName,lastName,occupation,location,picturePath};
      });
      res.status(200).json(formattedFriends);
  }catch(err){
    console.log(err);
    handleError(res,400,err.message);
  }
}
export {
  loginController,
  registerController,
  updateUserController,
  deleteUserController,
  patchIsStreamerController,
  getAllUsersController,
  getUserByIdController,
  getUserFriendsController,
  addRemoveFriendsController,
};
