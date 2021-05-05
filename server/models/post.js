const mongoose = require("mongoose");
//const User = require("user");

// define Schema
const Schema = mongoose.Schema;

// create post model
const PostSchema = new Schema({
    title: String,
    message: String,
    name: String,
    user: String,
    file: String,
    likeCounter: {
        type: [String],
        default: [],
    },
    dislikeCounter: {
        type: Number,
        default: 0
    },
    createdAt: {
        default: Date.now(),
        type: Date
    },
    comments: {
        type: Array
    }
});

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;