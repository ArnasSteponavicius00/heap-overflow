const express = require('express');
const Post = require('../models/post');

// Error Codes for HTTP
// https://www.restapitutorial.com/httpstatuscodes.html


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

const createPosts = async (req, res) => {
    const post = req.body;

    const newPost = new Post(post);

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json(error.message);
    }
}

module.exports = {
    getPosts,
    createPosts
};