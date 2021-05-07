// https://read.reduxbook.com/markdown/part1/04-action-creators.html
// https://github.com/reduxjs/redux-thunk
import * as api from '../api';

export const signin = (formData, history) => async (dispatch) => {
  try {
      const { data } = await api.signIn(formData);
      dispatch({ type: "AUTH", data });
      history.push('/');
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
      const { data } = await api.signUp(formData);
      dispatch({ type: "AUTH", data });
      history.push('/');
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await api.deleteUser(id);

    const action = { type: 'DELETE', payload: id};
    dispatch(action);
  } catch (error) {
    
  }
}