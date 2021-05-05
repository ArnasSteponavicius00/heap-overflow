import React from 'react';
import moment from 'moment';
import { Route, Link, useHistory } from 'react-router-dom';
import { Card, CardActions, Button, Typography, Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { deletePost, likePost, dislikePost } from '../../../actions/posts';

import useStyles from './styles'; // https://material-ui.com/styles/api/#makestyles-styles-options-hook
import SinglePost from '../SinglePost/SinglePost';

const Post = ( { post, setCurrentId } ) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const handleChange = (e) => {
      setCurrentId(post._id);
      history.push('/question');
    }

    return (
      <Container>
        <Card className={classes.card}>
          <div className={classes.header}>
            <Link to='/singlepost'><Typography variant="h6">{post.title}</Typography></Link>
          </div>
          <div className={classes.messageBody}>
            <Typography variant="body2">{post.message}</Typography>
          </div>
          
          <CardActions className={classes.cardActions}>
            <div className={classes.postDiv}>
              <Typography className={classes.details} variant="body2">Posted by {post.user} {moment(post.createdAt).fromNow()}</Typography>
            </div>
            <Button size="small" className={classes.qButton} color="secondary" onClick={() => dispatch(likePost(post._id))} >Like {post.likeCounter} </Button>
            <Button size="small" className={classes.qButton} color="secondary" onClick={() => dispatch(dislikePost(post._id))}>Dislike {post.dislikeCounter}</Button>
            <Button size="small" className={classes.qButton} onClick={handleChange}>Edit</Button>
            <Button size="small" className={classes.qButton} onClick={() => dispatch(deletePost(post._id))}>Delete</Button>
         </CardActions>
         
        </Card>
      </Container>
    );
};

export default Post;