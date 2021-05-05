import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress, Typography } from '@material-ui/core';
import Post from './Post/Post';

import useStyles from './styles'; // https://material-ui.com/styles/api/#makestyles-styles-options-hook

const Posts = ({ setCurrentId }) => {
    // init hook, gain access to the store from redux
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    if(!posts.length) {
        return (
            <Grid className={classes.containerProg} container>
                <CircularProgress className={classes.progress} />
            </Grid>
        );
    } else {
        return (
            <Grid className={classes.mainContainer} container spacing={3} xs={12} md={8}>
                <Typography className={classes.forum} variant="h5" align="center">Forum Posts</Typography>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} md={12}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        );
    }
}

export default Posts;