// https://read.reduxbook.com/markdown/part1/04-action-creators.html
// https://github.com/reduxjs/redux-thunk
import * as api from '../api';

export const signin = (data, history) => async (dispatch) => {
    try {
        // login logic code here
    } catch (error) {
        console.log(error);
    }  
};

export const signup = (data, history) => async (dispatch) => {
    try {
        // sign up logic code here
    } catch (error) {
        console.log(error);
    }
};