const mongoose = require("mongoose");

// define Schema
const Schema = mongoose.Schema;

// create post model
const PostSchema = new Schema({
    title: String,
    message: String,
    user: String,
    file: String,
    counter: {
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