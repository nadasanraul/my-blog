import React from 'react';
import moment from 'moment';
import ReactHtmlParser from 'react-html-parser';
import { connect } from 'react-redux';
import Header from './Header';
import Loading from './Loading';
import {startSetPublicPosts} from '../actions/posts';

export class ReadPostPage extends React.Component {

    componentDidMount() {
        if(this.props.isLoading === true) {
            this.props.startSetPublicPosts();
        }
    }

    render() {
        if(this.props.isLoading === true) {
            return (
                <Loading />
            )
        } else {
            return (
                <div>
                    <Header />
                    {!this.props.post ? <h1>No post found</h1> : 
                        <div className="container">
                            <h1>{this.props.post.title}</h1>
                            <small>Written by {this.props.post.author} on {moment(this.props.post.createdAt).format('MMMM Do, YYYY')}</small>
                            <hr/>
                            {ReactHtmlParser(this.props.post.body)}
                        </div>
                    }
                </div>
            );
        }
    }
} 

const mapStateToProps = (state, props) => ({
    isLoading: state.publicPosts.isLoading,
    post: state.publicPosts.posts.find(post => post.id === props.match.params.id)
});

const mapDispatchToProps = dispatch => ({
    startSetPublicPosts: () => dispatch(startSetPublicPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(ReadPostPage);