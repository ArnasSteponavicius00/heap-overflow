const express = require('express');
const mongoose = require('mongoose');
const Post = require('../models/post.js');

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
        res.status(404).json(error);
    }
}

// Create a new post
const createPosts = async (req, res) => {
    const post = req.body;

    const newPost = new Post(post);

    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json(error);
    }
}

// Update Posts
const updatePost = async (req, res) => {
    // get the id from the parameters and rename to _id
    const { id: _id } = req.params;

    // get the post data from the body of the page
    const post = req.body;

    // check whether the post has a valid id in the mongo database, if not
    // return a 404
    if(!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("No post with such id");
    }

    // update the post and gain access to it from the database
    const updatedPost = await Post.findByIdAndUpdate(_id, post, { new: true });
    
    // send the updated post as a response
    res.json(updatedPost);
}

// Delete Posts
const deletePost = async (req, res) => {
    const { id: _id } = req.params;

    // check whether the post has a valid id in the mongo database, if not
    // return a 404
    if(!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("No post with such id");
    }

    // delete the post
    await Post.findByIdAndDelete(_id);

    // send the updated post as a response
    res.json({ message: 'Post has been deleted' });
}

const likePost = async (req, res) => {
    const { id: _id } = req.params;

    // check whether the post has a valid id in the mongo database, if not
    // return a 404
    if(!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("No post with such id");
    }

    const post = await Post.findById(_id);
    const updatedPost = await Post.findByIdAndUpdate(_id, { likeCounter: post.likeCounter + 1 }, { new: true });

    res.json(updatedPost);
}

// export the functions
module.exports = {
    getPosts,
    createPosts,
    updatePost,
    deletePost,
    likePost
};