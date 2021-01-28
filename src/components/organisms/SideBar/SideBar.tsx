import React from 'react';
import Footer from "../Footer";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

interface IProps {
  active: boolean;
  toggle: () => void;
  openLogin: () => void;
}

const SideBar = (props: IProps) => {
  const className = props.active ? "sidebar active" : "sidebar";

  return (
    <div className={`sidebar-wrapper ${props.active ? "" : "close"}`}>
      <div className={className}>
        <div className="sidebar__title">
          <button className="sidebar__close" onClick={props.toggle}>
            <IoClose size="2em" />
          </button>
          <h1>VoteClient</h1>
        </div>
        <ul className="sidebar__nav">
          <li className="sidebar__item">
            <Link to="/" className="sidebar__link">Danh sách bình chọn</Link>
          </li>
          <li className="sidebar__item">
            <a className="sidebar__link" onClick={props.openLogin}>Đăng nhập</a>
          </li>
        </ul>
        <Footer />
      </div>
    </div>
  )
}

export default SideBar;