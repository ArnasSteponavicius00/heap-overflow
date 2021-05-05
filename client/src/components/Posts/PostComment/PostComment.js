import React from 'react';
import { Card, CardActions, Button, Typography } from '@material-ui/core';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost, likePost, dislikePost } from '../../../actions/posts';

import useStyles from './styles'; // https://material-ui.com/styles/api/#makestyles-styles-options-hook

const PostComment = () => {

    return (
        <div>
            Comments
        </div>
    );
};

export default Post;