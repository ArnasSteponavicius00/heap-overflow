import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { createPost, updatePost } from '../../actions/posts';
import useStyles from './styles'; // https://material-ui.com/styles/api/#makestyles-styles-options-hook

const Form = ({ currentId, setCurrentId}) => {

    const [postData, setPostData] = useState({title: '', message: '', file: ''});
    const post = useSelector((state) => (currentId ? state.posts.find((title) => title._id === currentId) : null));
    const dispatch = useDispatch();
    const classes = useStyles();
    const history = useHistory();
    const loggedInUser = JSON.parse(localStorage.getItem('profile'));

    useEffect(() => {
        if(post) setPostData(post);
    }, [post])

    // create a submission event to send post data to the action creator
    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId === 0){
            // pass in the state data
            dispatch(createPost({...postData, name: loggedInUser?.result?.name}, history));
            console.log("Submitted data");
        } else {
            dispatch(updatePost(currentId, {...postData, name: loggedInUser?.result?.name}, history)); 
            console.log("Updated Post");
        }
        
        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({title: '', message: '', file: ''});
    }

    if(!loggedInUser?.result?.name) {
        return (
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                    Please sign in to create posts or comment.
                </Typography>
            </Paper>
        );
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" className={`${classes.root} ${classes.form}`} noValidate onSubmit={handleSubmit}>
                <Typography variant="h6" align="center">{currentId ? 'Edit a Question' : 'Ask a Question!'}</Typography>
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} 
                           onChange={(e) => setPostData({...postData, title: e.target.value})}
                />
                <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} 
                           onChange={(e) => setPostData({...postData, message: e.target.value})}
                />
                <Button variant="contained" color="secondary" size="large" type="submit">
                    Submit
                </Button>
            </form>
        </Paper>
    );
}

export default Form;