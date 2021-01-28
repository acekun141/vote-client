import React, {useCallback, useState} from 'react';
import Header from '../Header';
import SideBar from '../SideBar/SideBar';
import Footer from "../Footer";
import Login from 'components/organisms/Login';

const BaseLayout = ({ children }: any) => {
  const [activeSidebar, setActiveSidebar] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

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
    <div className="layout">
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