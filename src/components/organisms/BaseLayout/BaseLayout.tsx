import React, {useCallback, useLayoutEffect, useRef, useState} from 'react';
import Header from '../Header';
import SideBar from '../SideBar/SideBar';
import Footer from "../Footer";
import Login from 'components/organisms/Login';
import { useLocation } from 'react-router-dom';

const BaseLayout = ({ children }: any) => {
  const [activeSidebar, setActiveSidebar] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const { pathname } = useLocation();
  const layoutRef = useRef<HTMLDivElement>();

  useLayoutEffect(() => {
    if (layoutRef.current) {
      layoutRef.current.scrollTo(0, 0);
    }
  }, [pathname]);

  const toggleSidebar = useCallback(() => {
    setActiveSidebar(prevState => !prevState);
  }, [activeSidebar])

  const closeLogin = useCallback(() => {
    setShowLogin(false);
  }, []);

  const openLogin = useCallback(() => {
    setShowLogin(true);
  }, []);

  return (
    <div className="layout" ref={layoutRef}>
      <Login isOpen={showLogin} handleClose={closeLogin} />
      <SideBar active={activeSidebar} toggle={toggleSidebar} openLogin={openLogin} />
      <Header toggleSidebar={toggleSidebar} openLogin={openLogin} />
      <main>
      {children}
      </main>
      <Footer />
    </div>
  )
}

export default BaseLayout;