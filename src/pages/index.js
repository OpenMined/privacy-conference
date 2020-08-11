import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Speakers from './Speakers';
import Agenda from './Agenda';
import Sponsors from './Sponsors';
import Home from './Home';

export default () => (
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
);
