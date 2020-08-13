import React from 'react';
import { Box } from 'theme-ui';
import { Switch, Route } from 'react-router-dom';

import Speakers from '../pages/Speakers';
import Agenda from '../pages/Agenda';
import Sponsors from '../pages/Sponsors';
import Home from '../pages/Home';

import theme from '../theme';

export default ({ headerHeight, sidebarWidth, footerHeight }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        top: headerHeight,
        width: ['100%', null, `calc(100% - ${sidebarWidth})`],
        minHeight: `calc(100% - ${headerHeight} - ${footerHeight})`
      }}
    >
      <Box p={4} pb={`calc(${theme.space[4]}px + ${footerHeight})`} sx={{ height: '100%' }}>
        <Switch>
          <Route path="/speakers">
            <Speakers />
          </Route>
          <Route path="/agenda">
            <Agenda />
          </Route>
          <Route path="/sponsors">
            <Sponsors />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Box>
    </Box>
  );
};
