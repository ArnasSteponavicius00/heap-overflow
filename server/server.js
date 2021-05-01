const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// define the path to the directory with the index file
app.use(express.static(path.join(__dirname, "..", "client/build")));

// send the index file to the client at the given route, this will be the returned route
// when the app is built.
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client/build/index.html"));
});

// listen for the server
app.listen(5000, () => console.log("Server is running on port 5000"));
