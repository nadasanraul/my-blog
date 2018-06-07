import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {startRemovePost} from '../actions/posts';

export const PostItem = ({id, title, body, createdAt, startRemovePost}) => (
    <div className="card mt-3">
        <div className="card-body">
            <h1 className="card-title">{title}</h1>
            <button 
                className="btn btn-danger"
                onClick={e => startRemovePost(id)}
            >
                Remove
            </button>
            <Link to={`/edit/${id}`} className="btn btn-info float-right">Edit</Link>
        </div>
    </div>
);

const mapDispatchToProps = dispatch => ({
    startRemovePost: (id) => dispatch(startRemovePost(id))
});

export default connect(undefined, mapDispatchToProps)(PostItem);