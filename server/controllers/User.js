//  references: https://bezkoder.com/react-redux-jwt-auth/
//              https://www.youtube.com/watch?v=LKlO8vLvUao&t=5210s
//              https://github.com/ArnasSteponavicius00/draq_project/blob/master/backend/routes/Users.js
// imports
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require('../models/user.js');
const dotenv = require('dotenv'); 

dotenv.config();

const signin = async (req, res) => {
    // get the data from the body of the request
    const { email, password } = req.body;

    try {
        // use mongoose to look for a user with the email from the request we got above
        const findUser = await User.findOne({ email });

        // check whether the user is the database, if not return a 404
        if(!findUser) {
            return res.send("Can't find user with entered email.");
        }

        // use bcrypt to compare the entered password with the password returned from the database
        const checkPassword = await bcrypt.compare(password, findUser.password);

        // if the password does not match return an error
        if(!checkPassword) {
            return res.send("Password does not match.");
        }

        // assign a web token to the payload, in this case the email and the id, salt the token with the environmental variable
        // and have it expire after an hour
        const token = jwt.sign( {email: findUser.email, id: findUser._id}, process.env.SECRET_KEY, { expiresIn: "1h"});

        // send back the user
        res.json({result: findUser, token});
    } catch (error) {
        res.json(error);
    }
};

const signup = async (req, res) => {
    // expected variables when the request is made
    const { email, password, confirmPassword, fName, lName } = req.body;

    try {
        // use mongoose to look for a user with the email from the request we got above
        const findUser = await User.findOne({ email });

        // check whether the user is the database, if there is a user with the email
        // send back the response user already exists
        if(findUser) {
            return res.send("User exists");
        }
        // check if the passwords match
        if( password !== confirmPassword) {
            return res.send("Password does not match.");
        }

        // make an asynchronous request to hash the password, the 10 is the salt level
        const hash = await bcrypt.hash(password, 10);
        // create the user and store it
        const result = await User.create( {email, password: hash, name: `${fName} ${lName}`} )

        // assign a web token to the payload, in this case the email and the id, salt the token with the environmental variable
        // and have it expire after an hour
        const token = jwt.sign( {email: result.email, id: result._id}, process.env.SECRET_KEY, { expiresIn: "1h"});

        // send back the result and the token
        res.json({result, token});
    } catch (error) {
        res.json(error);
    }
};

module.exports = {
    signin,
    signup
};