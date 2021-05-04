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
        console.log(email, password);
        res.json({email, password });
    } catch (error) {
        res.json(error);
    }
};

const signup = async (req, res) => {
    const { email, password, confirmPassword, fName, lName } = req.body;

    try {
        const result = await User.create( {email, password, name: `${fName} ${lName}`} );

        res.json({result});
    } catch (error) {
        res.json(error);
    }
};

module.exports = {
    signin,
    signup
};