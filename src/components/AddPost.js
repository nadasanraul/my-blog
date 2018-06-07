import React from 'react';
import {connect} from 'react-redux';
import PostForm from './PostForm';
import {startAddPost, startSetPublicPosts} from '../actions/posts';

const AddPost = (props) => (
    <div className='container'>
        <h1>Add a new post</h1>
        <PostForm 
            user={props.user}
            onSubmit={(post) => {
                props.startAddPost(post);
                props.startSetPublicPosts();
                props.history.push('/dashboard');
            }}
        />
    </div>
);

const mapStateToProps = (state) => ({
    user: state.auth
});

const mapDispatchToProps = dispatch => ({
    startAddPost: (post) => dispatch(startAddPost(post)),
    startSetPublicPosts: () => dispatch(startSetPublicPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);