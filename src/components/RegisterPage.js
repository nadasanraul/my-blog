import React from 'react';
import {connect} from 'react-redux';
import {onRegister} from '../actions/auth';
import Header from './Header';

class RegisterPage extends React.Component {

    state = {
        name: '',
        email: '',
        password: '',
        passwordConfirm: ''
    }

    onSubmit = e => {
        e.preventDefault();
        
        const user = {
            displayName: this.state.name,
            email: this.state.email,
            password: this.state.password
        };

        this.props.onRegister(user);
    }

    onNameChange = e => {
        const name = e.target.value;
        this.setState(() => ({name}));
    }

    onEmailChange = e => {
        const email = e.target.value;
        this.setState(() => ({email}));
    }

    onPassworChange = e => {
        const password = e.target.value;
        this.setState(() => ({password}));
    }

    onPassConfirmChange = e => {
        const passwordConfirm = e.target.value;
        this.setState(() => ({passwordConfirm}));
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <h1>Register a new account</h1>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Your Name"
                                value={this.state.name}
                                onChange={this.onNameChange}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="email" 
                                className="form-control" 
                                placeholder="Your Email"
                                value={this.state.email}
                                onChange={this.onEmailChange}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="password"
                                className="form-control" 
                                placeholder="Your Password"
                                value={this.state.password}
                                onChange={this.onPassworChange}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="Confirm Password"
                                value={this.state.passwordConfirm}
                                onChange={this.onPassConfirmChange}
                            />
                        </div>
                        <div className="form-group">
                            <input type="submit" className="button" value="Register"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    onRegister: (user) => dispatch(onRegister(user))
});

export default connect(undefined, mapDispatchToProps)(RegisterPage);