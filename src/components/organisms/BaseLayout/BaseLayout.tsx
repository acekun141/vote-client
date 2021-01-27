import React, {useCallback, useState} from 'react';
import Header from '../Header';
import SideBar from '../SideBar/SideBar';
import Footer from "../Footer";

const BaseLayout = ({ children }: any) => {
  const [activeSidebar, setActiveSidebar] = useState(false);

  const toggleSidebar = useCallback(() => {
    setActiveSidebar(prevState => !prevState);
  }, [activeSidebar])

  return (
    <div className="layout">
      <SideBar active={activeSidebar} toggle={toggleSidebar} />
      <Header toggleSidebar={toggleSidebar} />
      <main>
      {children}
      </main>
      <Footer />
    </div>
  )
}

export default BaseLayout;