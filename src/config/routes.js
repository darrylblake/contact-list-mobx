import React from 'react'
import { Router, Route, hashHistory, IndexRoute} from 'react-router'
import MainContainer from '../containers/MainContainer'
import UserContainer from '../containers/UserContainer'
import UsersContainer from '../containers/UsersContainer'


import { UsersStore } from '../store';

const usersStore = new UsersStore();

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={MainContainer} store={usersStore}>
      <IndexRoute component={UsersContainer} store={usersStore} />
      <Route path="user/:id" component={UserContainer} store={usersStore} />
    </Route>
  </Router>
);

export default routes