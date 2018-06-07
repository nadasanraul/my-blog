import React from 'react';
import { connect } from 'react-redux';
import PublicPostItem from './PublicPostItem';
import Header from './Header';

export const PublicPostsList = ({posts}) => (
    <div>
        <Header />
        <div className="container mt-3">
            {
                posts.map(post => <PublicPostItem key={post.id} {...post} />)
            }
        </div>
    </div>
);

const mapStateToProps = state => ({
    posts: state.publicPosts
});

export default connect(mapStateToProps)(PublicPostsList);