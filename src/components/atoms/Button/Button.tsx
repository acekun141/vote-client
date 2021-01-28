import React from 'react';

interface IProps extends React.ButtonHTMLAttributes<any> {
  children: any;
}

const Button = ({ children, className = '', ...rest }: IProps) => {
  return (
    <button className={`button ${className}`} {...rest}>
      { children }
    </button>
  )
}

export default Button;