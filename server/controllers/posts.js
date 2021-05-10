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

    // spread the data/params of the post and assign the token id to user
    const newPost = new Post({...post, user: req.userId});

    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json(error);
    }
}

// Update Posts
const updatePost = async (req, res) => {
    // get the id from the parameters and rename to id
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

// Like a Post
const likePost = async (req, res) => {
    const { id: _id } = req.params;

    // verify that person is user
    if(!req.userId) {
        return res.json({message: 'Not a user.'});
    }

    // check whether the post has a valid id in the mongo database, if not
    // return a 404
    if(!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("No post with such id");
    }

    const post = await Post.findById(_id);

    // callback function that loops through all id's
    const index = post.likeCounter.findIndex((id) => id == String(req.userId));

    // check if the user has already like a post
    if(index === -1) {
        post.likeCounter.push(req.userId);
    } else {
        post.likeCounter = post.likeCounter.filter((id) => id !== String(req.userId));
    }

    const updatedPost = await Post.findByIdAndUpdate(_id, post, { new: true });

    res.json(updatedPost);
}

const dislikePost = async (req, res) => {
    const { id: _id } = req.params;

    // verify that person is user
    if(!req.userId) {
        return res.json({message: 'Not a user.'});
    }

    // check whether the post has a valid id in the mongo database, if not
    // return a 404
    if(!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("No post with such id");
    }

    const post = await Post.findById(_id);

    // callback function that loops through all id's
    const index = post.dislikeCounter.findIndex((id) => id == String(req.userId));

    // check if the user has already like a post
    if(index === -1) {
        post.dislikeCounter.push(req.userId);
    } else {
        post.dislikeCounter = post.dislikeCounter.filter((id) => id !== String(req.userId));
    }

    const updatedPost = await Post.findByIdAndUpdate(_id, post, { new: true });

    res.json(updatedPost);
}

// export the functions
module.exports = {
    getPosts,
    createPosts,
    updatePost,
    deletePost,
    likePost,
    dislikePost,
};