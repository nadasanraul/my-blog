import postsReducer from '../../reducers/posts';
import posts from '../fixtures/posts';

test('should add new post to state', () => {
    const defaultState = []
    const post = posts[0];
    const action = {
        type: 'ADD_POST',
        post
    };
    const state = postsReducer(defaultState, action);
    expect(state).toEqual([post]);
});

test('should edit post', () => {
    const defaultState = posts;
    const id = posts[0].id;
    const updates = {title: "This is updated title"};

    const action = {
        type: 'EDIT_POST',
        id,
        updates
    };
    const state = postsReducer(defaultState, action);
    expect(state[0].title).toBe('This is updated title');
})

test('should set posts to state', () => {
    const defaultState = []
    const action = {
        type: 'SET_POSTS',
        posts
    };
    const state = postsReducer(defaultState, action);
    expect(state).toEqual(posts);
});