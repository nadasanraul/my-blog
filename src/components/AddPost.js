import React from 'react';
import {connect} from 'react-redux';
import PostForm from './PostForm';
import {startAddPost} from '../actions/posts';

const AddPost = (props) => (
    <div className='container'>
        <h1>Add a new post</h1>
        <PostForm 
            user={props.user}
            onSubmit={(post) => {
                props.startAddPost(post);
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
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);