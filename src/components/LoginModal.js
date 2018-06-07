import React from 'react';
import Modal from 'react-modal';
import Login from './Login';

const LoginModal = ({isModalOpen, closeModal}) => (
    <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        closeTimeoutMS={200}
        className="custom-modal"
    >
        <Login />
    </Modal>
);

export default LoginModal;