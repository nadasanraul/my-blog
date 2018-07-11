const defaultState = {
    posts: [],
    isLoading: true
}

export default (state = defaultState, action ) => {
    switch(action.type) {
        case 'ADD_PUBLIC_POST':
            return {...state, posts: [...state.posts, action.post]};
        case 'SET_PUBLIC_POSTS':
            return {...state, posts: action.posts, isLoading: action.isLoading};
        case 'POSTS_ARE_LOADING': 
            return {...state, isLoading: action.isLoading};
        default:
            return state;
    }
}