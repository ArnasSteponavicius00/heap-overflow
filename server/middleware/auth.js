const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv'); 

dotenv.config();

// this key is only to be used when running on localhost, when deployed the key
// will be replaced with an environmental variable
const secretkey="heap-overflow";

// this function allows to check whether a person is a user or not, if not then they
// wont be able to for example like/dislike a post, if they are a user next() will execute
// and allow them to proceed with the task
const auth = async (req, res, next) => {
    try {
        // get the authorization header from the request, which is the bearer token
        const token = req.headers.authorization.split(" ")[1];

        if(token == undefined) {
          console.log({message: "User not logged in."});
        }

        let decodedData;
        
        // decode the token using the secret key
        decodedData = jwt.verify(token, secretkey);
        // set the request header userId to the decoded token id
        req.userId = decodedData?.id;  
    
        // executed the task after decoding
        next();
      } catch (error) {
        console.log(error);
      }
};

// export the functions
module.exports = {
    auth,
};