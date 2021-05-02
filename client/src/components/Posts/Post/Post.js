import React from 'react';
import { useSelector } from 'react-redux';

const Post = () => {
    // init hook, gain access to the store from redux
    const posts = useSelector((state) => state.posts);
    console.log(posts);

    return (
        <h1>Post</h1>
    );
}

export default Post;