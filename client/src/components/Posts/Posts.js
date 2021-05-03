import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress, Typography } from '@material-ui/core';
import Post from './Post/Post';

import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
    // init hook, gain access to the store from redux
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    if(!posts.length) {
        return (
            <Grid className={classes.containerProg} container alignItems="stretch">
                <CircularProgress className={classes.progress} />
            </Grid>
        );
    } else {
        return (
            <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
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