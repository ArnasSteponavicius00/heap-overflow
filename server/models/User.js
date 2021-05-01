// imports
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// define Schema
const Schema = mongoose.Schema;

// create user Model
const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    createdAt: {
    default: Date.now(),
    type: Date
    },
    role: String,
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
