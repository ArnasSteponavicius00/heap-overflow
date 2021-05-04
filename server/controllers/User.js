// imports
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require('../models/user.js');
const dotenv = require('dotenv'); 

dotenv.config();

const signin = async (req, res) => {

}

const signup = async (req, res) => {
    
}

module.exports = {
    signin,
    signup
};