import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { createPost } from '../../actions/posts';

const Form = () => {

    const [postData, setPostData] = useState({title: '', message: '', user: '', file: ''});
    const dispatch = useDispatch();

    // create a submission event to send post data to the action creator
    const handleSubmit = (e) => {
        e.preventDefault();

        // pass in the state data
        dispatch(createPost(postData));
        console.log("Submitted data");
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
                <Button variant="contained" color="primary" size="large" type="submit" fullWidth>
                    Ask Away!
                </Button>
            </form>
        </Paper>
    );
}

export default Form;