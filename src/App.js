import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

import Header from './components/Header';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

const gridDimensions = {
  headerHeight: '90px',
  sidebarWidth: `${(1 / 3) * 100}%`,
  footerHeight: '90px'
};

export default () => {
  let location = useLocation();

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.initialize('UA-103957829-7');
    }
  }, []);

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.pageview(location.pathname);
    }
  }, [location]);

  return (
    <>
      <Content {...gridDimensions} />
      <Header {...gridDimensions} />
      <Sidebar {...gridDimensions} />
      <Footer {...gridDimensions} />
    </>
  );
};
