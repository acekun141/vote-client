import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const BaseLayout = ({ children }: any) => {
  return (
    <div className="layout">
      <Header />
      <main>
      {children}
      </main>
      <Footer />
    </div>
  )
}

export default BaseLayout;