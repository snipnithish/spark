import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title:{
        type:String,
        requried:true,
    },
    content:{
        type:String,
        requried:true,
    },
    url:{
        type:String,
        requried:true,
    },
    
});
export  const PostModel=mongoose.model("post",PostSchema,"search");