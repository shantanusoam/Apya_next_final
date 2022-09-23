import React from 'react';
import Head from 'next/head';

import Navbar from '../Component/upperbar/Navbar';
import Topbar from '../Component/upperbar/Topbar';

import Footer from './Footer';
import FooterAp from '../Component/Footer';

const Layout = ({ children }) => {
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="layout">
      <Head>
        <title>JS Mastery Store</title>
      </Head>
      <header>
        {/* <Topbar /> */}
        {/* <Navbar toggle={toggle} /> */}
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <FooterAp></FooterAp>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
