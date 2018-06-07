export default (state = [], action ) => {
    switch(action.type) {
        case 'ADD_PUBLIC_POST':
            return [...state, action.post];
        case 'SET_PUBLIC_POSTS':
            return action.posts;
        default:
            return state;
    }
}