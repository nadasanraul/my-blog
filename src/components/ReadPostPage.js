import React from 'react';
import moment from 'moment';
import ReactHtmlParser from 'react-html-parser';
import { connect } from 'react-redux';
import Header from './Header';

const ReadPostPage = (props) => (
    <div>
        <Header />
        <div className="container">
            <h1>{props.post.title}</h1>
            <small>Written by {props.post.author} on {moment(props.post.createdAt).format('MMMM Do, YYYY')}</small>
            <hr/>
            {ReactHtmlParser(props.post.body)}
        </div>
    </div>
);

const mapStateToProps = (state, props) => ({
    post: state.publicPosts.find(post => post.id === props.match.params.id)
});

export default connect(mapStateToProps)(ReadPostPage);