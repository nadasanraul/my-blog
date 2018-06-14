import React from 'react';
import moment from 'moment';
import ReactHtmlParser from 'react-html-parser';
import { connect } from 'react-redux';
import Header from './Header';
import Loading from './Loading';
import {startSetPublicPosts} from '../actions/posts';

export class ReadPostPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: props.isLoading
        };
    }
    componentWillMount() {
        this.props.startSetPublicPosts();
    }
    componentDidMount() {
        this.state.isLoading = false;
    }

    render() {
        if(this.state.isLoading === true) {
            return (
                <Loading />
            )
        } else {
            return (
                <div>
                    <Header />
                    <div className="container">
                        <h1>{this.props.post.title}</h1>
                        <small>Written by {this.props.post.author} on {moment(this.props.post.createdAt).format('MMMM Do, YYYY')}</small>
                        <hr/>
                        {ReactHtmlParser(this.props.post.body)}
                    </div>
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