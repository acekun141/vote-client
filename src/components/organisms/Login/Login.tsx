import React from 'react';
import Modal, {ModalHeader} from 'components/atoms/Modal';
import LoginForm from "./LoginForm";

interface IProps {
  isOpen: boolean;
  handleClose: () => void;
}

const Login = ({ isOpen, handleClose }: IProps) => {
  return (
    <Modal isOpen={isOpen}>
      <ModalHeader handleClose={handleClose}>
        <h2>Đăng nhập</h2>
      </ModalHeader>
      <LoginForm />
    </Modal>
  )
}

export default Login;