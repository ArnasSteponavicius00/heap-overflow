import React from 'react';
import { Card, CardActions, Button, Typography } from '@material-ui/core';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../actions/posts';

import useStyles from './styles';

const Post = ( { post, setCurrentId } ) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Card className={classes.card}>
          <Typography className={classes.media} variant="h6"></Typography>
          <div className={classes.overlay}>
            <Typography variant="h6">{post.title}</Typography>
            <Typography variant="body2">{post.message}</Typography>
          </div>
          <div className={classes.overlay2}>
            <Typography variant="body2">{post.user} {moment(post.createdAt).fromNow()}</Typography>
          </div>
          <CardActions className={classes.cardActions}>
            <Button size="small" color="primary" >Like {post.likeCounter} </Button>
            <Button size="small" color="primary" >Dislike {post.dislikeCounter}</Button>
            <Button size="small" style={{color: 'black'}} onClick={() => setCurrentId(post._id)}>Edit</Button>
            <Button size="small" style={{color: 'black'}} onClick={() => dispatch(deletePost(post._id))}>Delete</Button>
          </CardActions>
        </Card>
    );
};

export default Post;