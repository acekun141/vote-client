import React from 'react';
import { IoAppsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import useAuth from 'context/Auth/useAuth';

interface IProps {
  toggleSidebar: () => void;
  openLogin: () => void;
}


const Header = (props: IProps) => {
  const { isAuthenticated, user } = useAuth();
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
          <Link to="/" className="header__link">Danh sách bình chọn</Link>
        </li>
        <li className="header__item">
          {isAuthenticated ? (
            <a className="header__link">{user.username}</a>
          ) : (
            <a className="header__link" onClick={props.openLogin}>Đăng nhập</a>
          )}
        </li>
      </ul>
    </header>
  )
}

export default Header;