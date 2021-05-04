// reducers are functions that accepts state and action.
// based on that action we can change the state based on it.
// in this case, the states are the posts.
// https://blog.jscrambler.com/async-dispatch-chaining-with-redux-thunk/
// https://www.youtube.com/watch?v=LKlO8vLvUao&t=5210s

const auth = (state = {data: null}, action) => {
    switch (action.type) {
        case 'AUTH':
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            return { ...state, data: action?.data };
        default:
            return state;
    }
}

export default auth;