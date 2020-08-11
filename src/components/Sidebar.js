import React from 'react';
import { Box } from 'theme-ui';

export default ({ sidebarWidth, footerHeight }) => (
  <Box
    sx={{
      position: 'fixed',
      top: 0,
      right: 0,
      width: `${sidebarWidth}%`,
      height: `calc(100% - ${footerHeight}px)`,
      display: ['none', null, 'block'],
      zIndex: 'main'
    }}
  >
    Sidebar
  </Box>
);
