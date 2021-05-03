import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId}) => {

    const [postData, setPostData] = useState({title: '', message: '', user: '', file: ''});
    const post = useSelector((state) => (currentId ? state.posts.find((title) => title._id === currentId) : null));
    const dispatch = useDispatch();

    useEffect(() => {
        if(post) setPostData(post);
    }, [post])

    // create a submission event to send post data to the action creator
    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId){
            dispatch(updatePost(currentId, postData));
            console.log("Updated Post");
        } else {
            // pass in the state data
            dispatch(createPost(postData));
            console.log("Submitted data");
        }
    }

    return (
        <Paper>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant="h6" align="center">Ask a Question!</Typography>
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} 
                           onChange={(e) => setPostData({...postData, title: e.target.value})}
                />
                <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} 
                           onChange={(e) => setPostData({...postData, message: e.target.value})}
                />
                <TextField name="user" variant="outlined" label="User" fullWidth value={postData.user} 
                           onChange={(e) => setPostData({...postData, user: e.target.value})}
                />
                <Button variant="contained" color="primary" size="large" type="submit">
                    Submit
                </Button>
            </form>
        </Paper>
    );
}

export default Form;