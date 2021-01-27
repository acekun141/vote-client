import React from 'react';

interface IProps extends React.ButtonHTMLAttributes<any> {
  children: any;
}

const Button = ({ children, ...rest }: IProps) => {
  return (
    <button className="button" {...rest}>
      { children }
    </button>
  )
}

export default Button;