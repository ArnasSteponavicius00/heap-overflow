const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv'); 

dotenv.config();

// this function allows to check whether a person is a user or not, if not then they
// wont be able to for example like/dislike a post, if they are a user next() will execute
// and allow them to proceed with the task
const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        let decodedData;
        
        decodedData = jwt.verify(token, process.env.SECRET_KEY);
        req.userId = decodedData?.id;  
    
        next();
      } catch (error) {
        console.log(error);
      }
};

// export the functions
module.exports = {
    auth
};