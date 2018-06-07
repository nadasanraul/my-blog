import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import citiesReducer from '../reducers/cities';
import postsReducer from '../reducers/posts';
import publicPostsReducer from '../reducers/public-posts';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    //Store creation
    const store = createStore(
        combineReducers({ // combinig multiple reducers into one object
            auth: authReducer,
            cities: citiesReducer,
            posts: postsReducer,
            publicPosts: publicPostsReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
}

