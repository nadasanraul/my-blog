import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {startEditPost} from '../actions/posts';
import PostForm from './PostForm';

const EditPost = (props) => (
    <div className="container">
        <h1>Edit</h1>
        <Link to={`/read/${props.post.id}`}>Read this post</Link>
        <PostForm
            user={props.user}
            post={props.post} 
            onSubmit={(post) => {
                props.startEditPost(props.post.id, post);
                props.history.push('/dashboard');
            }}
        />
    </div>
);

const mapStateToProps = (state, props) => ({
    post: state.posts.find(post => post.id === props.match.params.id),
    user: state.auth
});

const mapDispatchToProps = (dispatch) => ({
    startEditPost: (id, post) => dispatch(startEditPost(id, post))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);