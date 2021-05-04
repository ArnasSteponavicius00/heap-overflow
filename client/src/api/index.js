// https://blog.jscrambler.com/async-dispatch-chaining-with-redux-thunk/
// https://masteringjs.io/tutorials/axios/create 
import axios from 'axios';

// create an instance of axios so that you can set up routes for multiple actions
const instance = axios.create({ baseURL: "http://localhost:5000" });

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