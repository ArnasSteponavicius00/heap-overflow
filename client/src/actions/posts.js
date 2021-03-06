// https://read.reduxbook.com/markdown/part1/04-action-creators.html
// https://github.com/reduxjs/redux-thunk
// https://blog.jscrambler.com/async-dispatch-chaining-with-redux-thunk/

import * as api from '../api';

export const getPosts = () =>  async (dispatch) => {
    try {
        // return the data, which are the posts
        const { data } = await api.fetchPosts();
        const action = { type: 'FETCH_ALL', payload: data};
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
}

export const createPost = (post, history) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        const action = { type: 'CREATE', payload: data};
        dispatch(action);
        // redirect to home after submission
        history.push('/');
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post, history) => async (dispatch) => {
    try {
        // destructure the response to get the data
        const { data } = await api.updatePost(id, post);
        const action = { type: 'UPDATE', payload: data};
        dispatch(action);
        // redirect to home after submission
        history.push('/');
    } catch (error) {
        console.log(error);
    }
}

// ref: https://www.youtube.com/watch?v=TAgbLPaPPlc
export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        const action = { type: 'DELETE', payload: id};
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        await api.likePost(id);
        const action = { type: 'LIKE_POST', payload: id};
        dispatch(action);
        window.location.reload();
    } catch (error) {
        console.log(error);
    }
}

export const dislikePost = (id) => async (dispatch) => {
    try {
        await api.dislikePost(id);
        const action = { type: 'DISLIKE_POST', payload: id};
        dispatch(action);
        window.location.reload();
    } catch (error) {
        console.log(error);
    }
}
