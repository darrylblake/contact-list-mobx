import React from 'react'
import { Router, Route, hashHistory, IndexRoute} from 'react-router'
import MainContainer from '../containers/MainContainer'

import { UsersStore } from '../store';

const usersStore = new UsersStore();

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={MainContainer} store={usersStore}>
    </Route>
  </Router>
);

export default routes