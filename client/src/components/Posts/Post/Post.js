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
          <div className={classes.header}>
            <Typography variant="h6">{post.title}</Typography>
          </div>
          <div className={classes.messageBody}>
            <Typography variant="body2">{post.message}</Typography>
          </div>
          
          <CardActions className={classes.cardActions}>
            <div className={classes.postDiv}>
              <Typography className={classes.details} variant="body2">Posted by {post.user} {moment(post.createdAt).fromNow()}</Typography>
            </div>
            <Button size="small" className={classes.qButton} color="secondary" >Like {post.likeCounter} </Button>
            <Button size="small" className={classes.qButton} color="secondary" >Dislike {post.dislikeCounter}</Button>
            <Button size="small" className={classes.qButton} onClick={() => setCurrentId(post._id)}>Edit</Button>
            <Button size="small" className={classes.qButton} onClick={() => dispatch(deletePost(post._id))}>Delete</Button>
         </CardActions>
        </Card>
    );
};

export default Post;