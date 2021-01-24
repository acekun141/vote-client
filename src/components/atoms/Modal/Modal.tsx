import React from 'react';

interface IProps {
  isOpen: boolean;
  size?: 'lg' | 'md' | 'sm';
}

interface IModalHeader {
  handleClose?: any;
  children: React.ReactNode;
}

const Modal: React.FunctionComponent<IProps> = (props) => {
  const className = props.isOpen ? 'modal modal--open' : 'modal modal--close'

  return (
    <div className={`${className} ${props.size || ''}`}>
      <div className="modal__main">
        {props.children}
      </div>
    </div>
  )
}

export const ModalHeader = (props: IModalHeader) => {
  return (
    <div className="modal__header">
      {props.children}
      <button onClick={props.handleClose}>Close</button>
    </div>
  )
}

export default Modal;