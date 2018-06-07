import React from 'react';
import Modal from 'react-modal';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import LoginModal from './LoginModal';
import {startLogin} from '../actions/auth';
import { Login } from './Login';

export class LandingPage extends React.Component {
    state = {
        isModalOpen: false
    }

    openModal = () => this.setState(() => ({isModalOpen: true}))

    closeModal = () => this.setState(() => ({isModalOpen: false}))

    render() {
        return (
            <div>
                <div className="box-layout">
                    <div className="box-layout__box">
                        <h1 className="box-layout__title">My Blog</h1>
                        <button onClick={this.openModal} className="button" type="submit">Login</button>
                        <h4 className="mt-3 mb-3">Or</h4>
                        <Link to="/read" className="btn btn-lg btn-secondary">Read our Posts</Link>
                    </div>
                </div>
                <LoginModal 
                    isModalOpen={this.state.isModalOpen}
                    closeModal={this.closeModal}
                />
            </div>
        );
    }
}

Modal.setAppElement('#app');

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LandingPage);