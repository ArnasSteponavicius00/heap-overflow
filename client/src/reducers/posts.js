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
        case 'UPDATE':
            // if post id is the same as the payload id, then return the payload which is the recently,
            // updated post
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        default:
            return posts;
    }
}

export default posts;