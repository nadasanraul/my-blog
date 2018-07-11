import database from '../firebase/firebase';

//Add a post
export const addPost = (post) => ({
    type: 'ADD_POST',
    post
});

export const startAddPost = (data = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            title = '',
            author = '',
            body = '',
            createdAt = 0
        } = data;
        const post = {title, author, body, createdAt};

        return database.ref(`users/${uid}/posts`).push(post)
            .then(ref => {
                database.ref('posts').child(`${ref.key}`).set(post)
                    .then(() => dispatch(addPublicPost({id: ref.key, ...post})));
                dispatch(addPost({id: ref.key, ...post}))
        });
    }
}

//Update post
export const editPost = (id, updates) => ({
    type: 'EDIT_POST',
    id,
    updates
});

export const startEditPost = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        database.ref(`posts/${id}`).update({...updates});

        return database.ref(`users/${uid}/posts/${id}`)
            .update({...updates})
            .then(() => dispatch(editPost(id, updates)));
    }
}

//Remove post
export const removePost = (id) => ({
    type: 'REMOVE_POST',
    id
});

export const startRemovePost = (id) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        database.ref(`posts/${id}`).remove();

        return database.ref(`users/${uid}/posts/${id}`)
            .remove()
            .then(() => dispatch(removePost(id)));
    };
};

//Set posts
export const setPosts = (posts, isLoading) => ({
    type: 'SET_POSTS',
    posts,
    isLoading
});


export const startSetPosts = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const posts = [];

        return database.ref(`users/${uid}/posts`)
            .once('value')
            .then(snapshot => {
                snapshot.forEach(childSnapsot => {
                    posts.push({
                        id: childSnapsot.key,
                        ...childSnapsot.val()
                    });
                });
                dispatch(setPosts(posts));
            });
    };
};

//Add public posts to store
export const addPublicPost = post => ({
    type: 'ADD_PUBLIC_POST',
    post
});

//Setting public posts for reading
const setPublicPosts = (posts, isLoading) => ({
    type: 'SET_PUBLIC_POSTS',
    posts,
    isLoading
});


export const startSetPublicPosts = () => {
    return dispatch => {
       
        const posts = [];
            
        return database.ref(`posts`)
            .once('value')
            .then(snapshot => {
                snapshot.forEach(childSnapsot => {
                    posts.push({
                        id: childSnapsot.key,
                        ...childSnapsot.val()
                    });
                });
            })
            .then(() => dispatch(setPublicPosts(posts, false)))
    };
};
