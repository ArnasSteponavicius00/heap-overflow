// https://read.reduxbook.com/markdown/part1/04-action-creators.html
// https://github.com/reduxjs/redux-thunk
import * as api from '../api';

export const signin = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);
        dispatch({ type: "AUTH", data });
        history.push('/');
      } catch (error) {
        console.log(error);
      }
};

export const signup = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);
        dispatch({ type: "AUTH", data });
        history.push('/');
      } catch (error) {
        console.log(error);
      }
};