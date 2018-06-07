import React from 'react';
import ReactQuill from 'react-quill';
import moment from 'moment';
import { connect } from 'react-redux';

export default class PostForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.post ? props.post.title : '',
            author: props.user.name,
            body: props.post ? props.post.body: '',
            createdAt: props.post ? props.post.createdAt : moment().valueOf(),
            errors: {
                titleError: '',
                bodyError: ''
            }
        };
    }

    onTitleChange = e => {
        const title = e.target.value;
        this.setState(() => ({title}));
    };

    onBodyChange = value => {
        const body = value;
        this.setState(() => ({body}));
    };

    onSubmit = e => {
        e.preventDefault();

        if(this.state.title.length === 0 && this.state.body.length === 0) {
            this.setState(() => ({
                errors: {
                    titleError: 'Please provide a title for the post',
                    bodyError: 'Please provide a body for the post'
                }
            }));
        } else if (this.state.title.length === 0) {
            this.setState(() => ({
                errors: {
                    titleError: 'Please provide a title for the post'
                }
            }));
        } else if (this.state.body.length === 0) {
            this.setState(() => ({
                errors: {
                    bodyError: 'Please provide a body for the post'
                }
            }));
        } else {
            this.setState(() => ({
                errors: {
                    bodyError: '',
                    titleError: ''
                }
            }));
            const post = {
                title: this.state.title,
                author: this.state.author,
                body: this.state.body,
                createdAt: this.state.createdAt
            }
            this.props.onSubmit(post);
        }
    };

    render() {
        return (
            <form onSubmit={this.onSubmit} className="mt-3" action="">
                <div className="form-group">
                    <input 
                        name="title" 
                        type="text" 
                        className={`form-control ${this.state.errors.titleError && 'invalid'}`} 
                        placeholder="Title" 
                        value={this.state.title} 
                        onChange={this.onTitleChange}
                        autoFocus
                    />
                    {
                        this.state.errors.titleError && 
                        <small className="form__error">
                            {this.state.errors.titleError}
                        </small>
                    }
                </div>
                <div className="form-group">
                    <ReactQuill 
                        className={this.state.errors.bodyError && 'ql-invalid'}
                        placeholder="Post body here"
                        value={this.state.body} 
                        onChange={this.onBodyChange}
                    />
                    {
                        this.state.errors.bodyError && 
                        <small className="form__error">
                            {this.state.errors.bodyError}
                        </small>
                    }
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        )
    }
}
