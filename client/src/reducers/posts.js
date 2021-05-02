// reducers are functions that accepts state and action.
// based on that action we can change the state based on it.
// in this case, the states are the posts.

const posts = (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            // return the all posts
            return action.payload;
        case 'CREATE':
            // spread the posts and save
            return [...posts, action.payload];
        default:
            return posts;
    }
}

export default posts;