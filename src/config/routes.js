import React from 'react'
import { Router, Route, hashHistory, IndexRoute} from 'react-router'
import MainContainer from '../containers/MainContainer'
import UserContainer from '../containers/UserContainer'
import UsersContainer from '../containers/UsersContainer'
import ReportsContainer from '../containers/ReportsContainer'
import { Provider } from 'mobx-react';

import { UsersStore } from '../store';

const usersStore = new UsersStore();

var routes = (
  <Provider store={usersStore}>
    <Router history={hashHistory}>
      <Route path="/" component={MainContainer}>
        <IndexRoute component={UsersContainer} />
        <Route path="user/:id" component={UserContainer} />
        <Route path="reports" component={ReportsContainer} />
      </Route>
    </Router>
  </Provider>
);

export default routes