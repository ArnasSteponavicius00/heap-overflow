const express = require('express');
const Post = require('../models/post');

// Retrieve the posts inside the database
// find() takes time, so its made as an asynchronous action
// if successful return status 200 and json of return, else,
// return status 400
const getPosts = async (req, res) => {
    try {
        const postMessages = await Post.find();
        
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json(error.message);
    }
}

const createPosts = (req, res) => {
    res.send("Post created");
}

module.exports = {
    getPosts,
    createPosts
};