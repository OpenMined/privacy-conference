import React from 'react';
import { Box } from 'theme-ui';

import Pages from '../pages';

export default ({ headerHeight, sidebarWidth }) => (
  <Box
    sx={{
      position: 'relative',
      top: `${headerHeight}px`,
      width: ['100%', null, `calc(100% - ${sidebarWidth}%)`],
      paddingBottom: `${headerHeight}px`,
      zIndex: 'base'
    }}
  >
    <Pages />
  </Box>
);
