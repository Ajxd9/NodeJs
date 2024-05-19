import Post from "../model/mongoDB/posts/posts.js";
import User from "../model/mongodb/users/User.js";

const createPostController = async(req,res)=>{
    try{
        const{userId,description,picturePath}=req.body;
        const user = await User.findById(userId);
        const newPost=new Post({
            userId,
            firstName:user.firstName,
            lastName:user.lastName,
            location:user.location,
            description,
            userPicturePath:user.picturePath,
            picturePath,
            likes:{},
            comments:[]
        })
        await newPost.save();
        const post=await Post.find();
        res.status(200).json(post);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}
const getFeedPostsController =async(req,res)=>{
    try{
        const post=await Post.find();
        res.status(200).json(post);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}
const getUserPostsController=async(req,res)=>{
    try{
        const {userId} = req.params;
        const post=await Post.find({userId});
        res.status(200).json(post);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}
const likePostController = async(req,res)=>{
    try{
        const {postId}=req.params;
        const {userId}=req.body;
        const post=await Post.findById(postId);
        const isLiked = post.likes.get(userId);
        if(isLiked){
            posts.likes.delete(userId);
        }else{
            posts.likes.set(userId,true);
        }
        const updatedPost = await Post.findByIdAndUpdate(
            id,
            {likes:post.likes},
            {new:true}
        );
    res.status(200).json(post);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}
export default {
    createPostController,
    getFeedPostsController,
    getUserPostsController,
    likePostController,
}