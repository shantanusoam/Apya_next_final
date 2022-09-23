import React from 'react';
import { Toaster } from 'react-hot-toast';

import { Layout } from '../components';
import '../styles/globals.scss';
// import '../sass/main.scss'
import { StateContext } from '../context/StateContext';
import Navbar from '../Component/upperbar/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        {/* <Navbar /> */}
        {/* <Toaster /> */}
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
