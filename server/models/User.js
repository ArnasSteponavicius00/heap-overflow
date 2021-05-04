// imports
const mongoose = require("mongoose");

// define Schema
const Schema = mongoose.Schema;

// create user Model
const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    id: String,
    createdAt: {
        default: Date.now(),
        type: Date
    },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
