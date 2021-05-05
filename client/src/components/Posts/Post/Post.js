import React from 'react';
import moment from 'moment';
import { Link} from 'react-router-dom';
import { Card, CardActions, Button, Typography, Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { deletePost, likePost, dislikePost } from '../../../actions/posts';

import useStyles from './styles'; // https://material-ui.com/styles/api/#makestyles-styles-options-hook

const Post = ( { post, setCurrentId } ) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    // referenced and adapted from: https://www.youtube.com/watch?v=LKlO8vLvUao
    const Likes = () => {
      if (post.likeCounter.length > 0) {
        return post.likeCounter.find((likeCounter) => likeCounter === (user?.result?._id))
          ? (
            <>&nbsp;{post.likeCounter.length > 2 ? `You and ${post.likeCounter.length - 1} others` : `${post.likeCounter.length} like${post.likeCounter.length > 1 ? 's' : ''}` }</>
          ) : (
            <>&nbsp;{post.likeCounter.length} {post.likeCounter.length === 1 ? 'Like' : 'Likes'}</>
          );
      }
      return <>&nbsp;Like</>;
    };

    const Dislikes = () => {
      if (post.dislikeCounter.length > 0) {
        return post.dislikeCounter.find((dislikeCounter) => dislikeCounter === (user?.result?._id))
          ? (
            <>&nbsp;{post.dislikeCounter.length > 2 ? `You and ${post.dislikeCounter.length - 1} others` : `${post.dislikeCounter.length} Dislike${post.dislikeCounter.length > 1 ? 's' : ''}` }</>
          ) : (
            <>&nbsp;{post.dislikeCounter.length} {post.dislikeCounter.length === 1 ? 'Dislike' : 'Dislikes'}</>
          );
      }
      return <>&nbsp;Dislike</>;
    };

    const handleChange = (e) => {
      e.preventDefault();
      setCurrentId(post._id);
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
              <Typography className={classes.details} variant="body2">Posted by {post.name} {moment(post.createdAt).fromNow()}</Typography>
            </div>
            <Button size="small" className={classes.qButton} color="secondary" onClick={() => dispatch(likePost(post._id))}><Likes /></Button>
            <Button size="small" className={classes.qButton} color="secondary" onClick={() => dispatch(dislikePost(post._id))}><Dislikes /></Button>
            {(user?.result?._id === post?.user) && (
              <Button size="small" className={classes.qButton} onClick={ handleChange }>Edit</Button>
            )}
            {(user?.result?._id === post?.user) && (
              <Button size="small" className={classes.qButton} onClick={() => dispatch(deletePost(post._id))}>Delete</Button>
            )}
            {(user) && (
              <Button size="small" component={Link} to="/comment" className={classes.qButton}>Comment</Button>
            )}
            
            
            
         </CardActions>
        </Card>
      </Container>
    );
};

export default Post;