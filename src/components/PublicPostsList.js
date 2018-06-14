import React from 'react';
import { connect } from 'react-redux';
import {startSetPublicPosts} from '../actions/posts';
import PublicPostItem from './PublicPostItem';
import Header from './Header';
import Loading from './Loading';


export class PublicPostsList extends React.Component{
    constructor(props) {
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

    render () {
        if(this.state.isLoading == true) {
            return (
                <Loading />
            )
        } else {
            return (
                <div>
                    <Header />
                        <div className="container mt-3">
                            {
                                this.props.posts.length > 0 ?
                                this.props.posts.map(post => <PublicPostItem key={post.id} {...post} />) : 
                                <h1>There are no posts available</h1>
                            }
                        </div>
                </div>
            );
        }
    }
}

const mapStateToProps = state => ({
    posts: state.publicPosts.posts,
    isLoading: state.publicPosts.isLoading
});

const mapDispatchToProps = dispatch => ({
    startSetPublicPosts: () => dispatch(startSetPublicPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(PublicPostsList);