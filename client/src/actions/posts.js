// https://read.reduxbook.com/markdown/part1/04-action-creators.html
import * as api from '../api';

export const getPosts = () =>  async (dispatch) => {
    try {
        // return the data, which are the posts
        const { data } = await api.fetchPosts();
        const action = { type: 'FETCH_ALL', payload: data};
        dispatch(action);
    } catch (error) {
        console.log(error.message);
    }
}