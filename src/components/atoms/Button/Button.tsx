import React from 'react';

interface IProps {
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