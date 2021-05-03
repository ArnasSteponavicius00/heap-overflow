import React from 'react';
import { Card, CardActions, Button, Typography } from '@material-ui/core';
import moment from 'moment';

import useStyles from './styles';

const Post = (post) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
          <Typography className={classes.media} variant="h2"></Typography>
          <div className={classes.overlay}>
            <Typography variant="h6">{post.post.title}</Typography>
            <Typography variant="body2">{post.post.message}</Typography>
          </div>
          <Typography className={classes.details} variant="h6" color="textSecondary" component="p">{post.post.user}</Typography> 
          <Typography className={classes.details} variant="body2">{moment(post.createdAt).fromNow()}</Typography>
          <CardActions className={classes.cardActions}>
            <Button size="small" color="primary" >Like {post.post.likeCount} </Button>
            <Button size="small" color="primary" >Dislike</Button>
          </CardActions>
        </Card>
    );
};

export default Post;