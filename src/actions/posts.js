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
            .then(ref => dispatch(addPost({id: ref.key, ...post})));
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

        return database.ref(`users/${uid}/posts/${id}`)
            .remove()
            .then(() => dispatch(removePost(id)));
    };
};

//Set posts
export const setPosts = posts => ({
    type: 'SET_POSTS',
    posts
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
export const setPublicPosts = posts => ({
    type: 'SET_PUBLIC_POSTS',
    posts
});

export const postsAreLoading = bool => ({
    type: 'POSTS_ARE_LOADING',
    isLoading: bool
});

export const startSetPublicPosts = () => {
    return dispatch => {

        dispatch(postsAreLoading(true));

        const uids = []
        const posts = [];
            
        return database.ref('users')
            .once('value')
            .then(snapshot => {
                snapshot.forEach(childSnapsot => {
                    uids.push(childSnapsot.key);
                });
            })
            .then(() => {
                console.log(uids);
                uids.forEach((uid) => {
                    database.ref(`users/${uid}/posts`)
                        .once('value')
                        .then(snapshot => {
                            snapshot.forEach(childSnapsot => {
                                posts.push({
                                    id: childSnapsot.key,
                                    ...childSnapsot.val()
                                });
                            });
                        })
                        .then(() => { 
                            setTimeout(() => dispatch(setPublicPosts(posts)), 1);
                        })
                        .then(() => dispatch(postsAreLoading(false)))
                });
            });
    };
};

// return database.ref('users')
        //     .once('value')
        //     .then(snapshot => {
        //         snapshot.forEach(childSnapsot => {
        //             const uid = childSnapsot.key;
        //             database.ref(`users/${uid}/posts`)
        //                 .once('value')
        //                 .then(snapshot => {
        //                     snapshot.forEach(childSnapsot => {
        //                         posts.push({
        //                             id: childSnapsot.key,
        //                             ...childSnapsot.val()
        //                         });
        //                     });
        //                 });
        //         });
        //         // dispatch(setPublicPosts(posts));
        //     }).then(() => dispatch(setPublicPosts(posts)));