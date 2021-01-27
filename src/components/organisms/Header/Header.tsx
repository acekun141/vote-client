import React from 'react';
import { IoAppsSharp } from "react-icons/io5";

interface IProps {
  toggleSidebar: () => void;
}


const Header = (props: IProps) => {
  return (
    <header className="header">
      <div className="header__logo">
        <h2>VoteClient</h2>
      </div>
      <button onClick={props.toggleSidebar} className="header__toggle">
        <IoAppsSharp size="2em" />
      </button>
      <ul className="header__nav">
        <li className="header__item">
          <a className="header__link">Danh sach binh chon</a>
        </li>
        <li className="header__item">
          <a className="header__link">Đăng nhập</a>
        </li>
      </ul>
    </header>
  )
}

export default Header;