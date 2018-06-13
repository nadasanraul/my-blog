import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

export class Login extends React.Component {

    state = {
        email: '',
        password: '',
        errors: {
            emailError: '',
            passwordError: ''
        }
    }

    onEmailchange = e => {
        const email = e.target.value;
        this.setState(() => ({email}));
    }

    onPasswordChange = e => {
        const password = e.target.value;
        this.setState(() => ({password}));
    }

    onSubmit = e => {
        e.preventDefault();

        if(!this.state.email && !this.state.password) {
            this.setState(() => ({
                errors: {
                    emailError: 'Please provide an email',
                    passwordError: 'Please provide a password'
                }
            }));
        } else if (!this.state.email) {
            this.setState(() => ({
                errors: {
                    emailError: 'Please provide an email'
                }
            }));
        } else if (!this.state.password) {
            this.setState(() => ({
                errors: {
                    passwordError: 'Please provide a password'
                }
            }));
        } else {
            this.props.startLogin(this.state.email, this.state.password);
        }
    }
    
    render() {
        return (
            <div>
                <h1 className="box-layout__title">Login</h1>
                <button onClick={this.props.startLogin} className="button mb-3">Login with Google</button>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input 
                            type="email" 
                            placeholder="Email" 
                            className={`form-control ${this.state.errors.emailError && 'invalid'}`}
                            value={this.state.email}
                            onChange={this.onEmailchange}
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
                            placeholder="Password" 
                            className={`form-control ${this.state.errors.passwordError && 'invalid'}`}
                            value={this.state.password}
                            onChange={this.onPasswordChange}
                        />
                        {
                            this.state.errors.passwordError && 
                            <small className="form__error">
                                {this.state.errors.passwordError}
                            </small>
                        }
                    </div>
                    <div className="form-group">
                        <input type="submit" className='btn btn-primary' value='Login'/>
                    </div>
                </form>
                <Link to="/register" className="btn btn-lg btn-secondary">Register</Link>
            </div>
        );
    }
} 

const mapDispatchToProps = (dispatch) => ({
    startLogin: (email, password) => dispatch(startLogin(email, password))
});

export default connect(undefined, mapDispatchToProps)(Login);