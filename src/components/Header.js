import React from 'react';
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom';
import LoginModal from './LoginModal';
import {startLogout, startLogin} from '../actions/auth';
import { Login } from './Login';

export class Header extends React.Component {
    state = {
        isModalOpen: false
    }

    openModal = () => this.setState(() => ({isModalOpen: true}))

    closeModal = () => this.setState(() => ({isModalOpen: false}))

    render () {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
                <div className="container">
                    <NavLink to="/" className="navbar-brand">My Blog</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                    </button>
                    {
                        this.props.user.uid 
                        ?
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav mr-auto ml-3">
                                <li className="nav-item">
                                    <NavLink to="/dashboard" className="nav-link" activeClassName="active">Dashboard</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/create" className="nav-link" activeClassName="active">Add Post</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/read" className="nav-link" activeClassName="active">Read Posts</NavLink>
                                </li>
                            </ul>
                            <div className="nav-item">
                                <h4 className="nav-link header__title">Welcome {this.props.user.name}</h4>
                            </div>
                            <button onClick={this.props.startLogout} className="btn btn-info">Logout</button>
                        </div>
                        :
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav mr-auto ml-3">
                                <li className="nav-item">
                                    <NavLink to="/read" className="nav-link" activeClassName="active">Read Posts</NavLink>
                                </li>
                            </ul>
                            <button onClick={this.openModal} className="btn btn-info">Login</button>
                            <LoginModal 
                                isModalOpen={this.state.isModalOpen}
                                closeModal={this.closeModal}
                            />
                        </div>
        
                    }
                </div>
            </nav>
        );
    }
}

const mapStateToProps = state => ({
    user: state.auth
});

const mapDispatchToProps = dispatch => ({
    startLogout: () => dispatch(startLogout()),
    startLogin: () => dispatch(startLogin())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);