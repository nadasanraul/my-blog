import React from 'react';
import {connect} from 'react-redux';
import {onRegister} from '../actions/auth';
import Header from './Header';

class RegisterPage extends React.Component {

    state = {
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
        errors: {
            nameError: '',
            emailError: '',
            passwordError: ''
        }
    }

    onSubmit = e => {

        e.preventDefault();

        if(!this.state.name && !this.state.email && !this.state.password) {
            this.setState(() => ({
                errors: {
                    nameError: 'Please provide a name',
                    emailError: 'Please provide an email',
                    passwordError: 'Please provide a password'
                }
            }));
        } else if (!this.state.name && !this.state.email) {
            this.setState(() => ({
                errors: {
                    nameError: 'Please provide a name',
                    emailError: 'Please provide an email',
                }
            }));
         } else if (!this.state.name && !this.state.password) {
            this.setState(() => ({
                errors: {
                    nameError: 'Please provide a name',
                    passwordError: 'Please provide a password'
                }
            }));
         } else if (!this.state.email && !this.state.password) {
            this.setState(() => ({
                errors: {
                    emailError: 'Please provide an email',
                    passwordError: 'Please provide a password'
                }
            }));
         } else if (!this.state.name) {
            this.setState(() => ({
                errors: {
                    nameError: 'Please provide a name',
                }
            }));
         } else if (!this.state.email) {
            this.setState(() => ({
                errors: {
                    emailError: 'Please provide an email',
                }
            }));
         } else if (!this.state.password) {
            this.setState(() => ({
                errors: {
                    passwordError: 'Please provide a password'
                }
            }));
         } else {
            if(this.state.password !== this.state.passwordConfirm) {
                this.setState(() => ({
                    errors: {
                        passwordError: 'Passwords do not match'
                    }
                }));
            } else if (this.state.password.length < 6) {
                this.setState(() => ({
                    errors: {
                        passwordError: 'Password must be at least 6 characters'
                    }
                }));
            } else {
                this.setState(() => ({
                    errors: {
                        nameError: '',
                        emailError: '',
                        passwordError: ''
                    }
                }));

                const user = {
                    displayName: this.state.name,
                    email: this.state.email,
                    password: this.state.password
                };
        
                this.props.onRegister(user);
            }
        }
        
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
                                className={`form-control ${this.state.errors.nameError && 'invalid'}`} 
                                placeholder="Your Name"
                                value={this.state.name}
                                onChange={this.onNameChange}
                            />
                            {
                                this.state.errors.nameError && 
                                <small className="form__error">
                                    {this.state.errors.nameError}
                                </small>
                            }
                        </div>
                        <div className="form-group">
                            <input 
                                type="email" 
                                className={`form-control ${this.state.errors.emailError && 'invalid'}`} 
                                placeholder="Your Email"
                                value={this.state.email}
                                onChange={this.onEmailChange}
                            />
                            {
                                this.state.errors.emailError && 
                                <small className="form__error">
                                    {this.state.errors.emailError}
                                </small>
                            }
                        </div>
                        <div className="form-group">
                            <input 
                                type="password"
                                className={`form-control ${this.state.errors.passwordError && 'invalid'}`}
                                placeholder="Your Password"
                                value={this.state.password}
                                onChange={this.onPassworChange}
                            />
                            {
                                this.state.errors.passwordError && 
                                <small className="form__error">
                                    {this.state.errors.passwordError}
                                </small>
                            }
                        </div>
                        <div className="form-group">
                            <input 
                                type="password" 
                                className={`form-control ${this.state.errors.passwordError && 'invalid'}`}
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