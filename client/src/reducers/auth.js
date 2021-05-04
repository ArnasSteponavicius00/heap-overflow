// reducers are functions that accepts state and action.
// based on that action we can change the state based on it.
// in this case, the states are the posts.
// https://blog.jscrambler.com/async-dispatch-chaining-with-redux-thunk/

const auth = (state = {data: null}, action) => {
    switch (action.type) {
        case 'AUTH':
            // add the user to localStorage to handle the state of the shown website
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            return { ...state, data: action?.data };
        case 'LOGOUT':
            // remove the user information from localStorage
            localStorage.clear();
            return { ...state, data: null};   
        default:
            return state;
    }
}

export default auth;