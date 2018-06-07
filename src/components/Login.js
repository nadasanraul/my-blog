import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

export class Login extends React.Component {

    state = {
        email: '',
        password: ''
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

        this.props.startLogin(this.state.email, this.state.password);
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
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onEmailchange}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="password" 
                            placeholder="Password" 
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onPasswordChange}
                        />
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