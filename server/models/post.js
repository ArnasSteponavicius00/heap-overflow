const mongoose = require("mongoose");
//const User = require("user");

// define Schema
const Schema = mongoose.Schema;

// create post model
const PostSchema = new Schema({
    title: String,
    message: String,
    user: String,
    file: String,
    likeCounter: {
        type: Number,
        default: 0
    },
    dislikeCounter: {
        type: Number,
        default: 0
    },
    createdAt: {
        default: Date.now(),
        type: Date
    },
});

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;