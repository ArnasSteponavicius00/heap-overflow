// https://blog.jscrambler.com/async-dispatch-chaining-with-redux-thunk/
// https://masteringjs.io/tutorials/axios/create 
// https://bezkoder.com/react-redux-jwt-auth/#Configure_Port_for_React_JWT_Auth_Client_with_Web_API

import axios from 'axios';

// create an instance of axios so that you can set up routes for multiple actions
const instance = axios.create({ baseURL: "https://heap-overflow-fyp.herokuapp.com/" });

// allows the backend to get the data by sending the header to the middleware,
// based on the header the header sent the middleware on the server side where it gets decoded.
// and can verify that the person is a user.
instance.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});

// Post api
export const fetchPosts = () => instance.get('/posts');
export const createPost = (newPost) => instance.post('/posts', newPost);
export const updatePost = (id, postData) => instance.patch(`${'/posts'}/${id}`, postData);
export const deletePost = (id) => instance.delete(`${'/posts'}/${id}`);
export const likePost = (id) => instance.patch(`${'/posts'}/${id}/likePost`);
export const dislikePost = (id) => instance.patch(`${'/posts'}/${id}/dislikePost`);

// User api
export const signIn = (formData) => instance.post('/user/signin', formData);
export const signUp = (formData) => instance.post('/user/signup', formData);
export const deleteUser = (id) => instance.delete(`${'/user'}/${id}`);