import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';
import Post from './Post/Post';

const Posts = () => {
    // init hook, gain access to the store from redux
    const posts = useSelector((state) => state.posts);
    console.log(posts);

    if(!posts.length) {
        return (
            <CircularProgress />
        );
    } else {
        return (
            <Grid container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={6}>
                        <Post post={post} />
                    </Grid>
                ))}
            </Grid>
        );
    }
}

export default Posts;