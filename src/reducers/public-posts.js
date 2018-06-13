const defaultState = {
    posts: [],
    isLoading: true
}

export default (state = defaultState, action ) => {
    switch(action.type) {
        case 'ADD_PUBLIC_POST':
            return [...state, action.post];
        case 'SET_PUBLIC_POSTS':
            return {...state, posts: action.posts};
        case 'POSTS_ARE_LOADING': 
            return {...state, isLoading: action.isLoading};
        default:
            return state;
    }
}