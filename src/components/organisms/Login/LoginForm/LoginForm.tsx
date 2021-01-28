import React from 'react';
import Button from "../../../atoms/Button";
import { IoLogoFacebook } from 'react-icons/io5';

const LoginForm = () => {
  return (
    <div className="login-form">
      <Button className="button--facebook">
        <IoLogoFacebook size="2em" />
        Đăng nhập bằng Facebook
      </Button>
    </div>
  )
}

export default LoginForm;