export default (state = [], action) => {
    switch(action.type){
        case 'ADD_POST':
            return [...state, action.post];
        case 'EDIT_POST':
            return state.map((post) => post.id === action.id ? {...post, ...action.updates} : post);
        case 'REMOVE_POST':
            return state.filter(post => post.id !== action.id);
        case 'SET_POSTS':
            return action.posts;
        default:
            return state;
    }
}