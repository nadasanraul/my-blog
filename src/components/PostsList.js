import React from 'react';
import { connect } from 'react-redux';
import PostItem from './PostItem';

export const PostsList  = ({posts}) => (
    <div>
        {
            posts.map(post => <PostItem key={post.id} {...post} />)
        }
    </div>
);

const mapStateToProps = state => ({posts: state.posts});

export default connect(mapStateToProps)(PostsList);