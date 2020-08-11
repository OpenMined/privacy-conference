import React from 'react';
import { ThemeProvider, Box } from 'theme-ui';
import { BrowserRouter } from 'react-router-dom';

import theme from './theme';

import Header from './components/Header';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

console.log(theme);

const gridDimensions = {
  headerHeight: 90, // 90px
  sidebarWidth: 100 / 3, // 33.333%
  footerHeight: 90 // 90px
};

export default () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Box
        sx={{
          position: 'relative',
          width: '100vw',
          height: '100vh',
          overflowX: 'hidden',
          overflowY: 'auto'
        }}
      >
        <Header {...gridDimensions} />
        <Content {...gridDimensions} />
        <Sidebar {...gridDimensions} />
        <Footer {...gridDimensions} />
      </Box>
    </BrowserRouter>
  </ThemeProvider>
);
