import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router'

@observer
class UserContainer extends Component {
  constructor(props) {
    super(props);
    props.route.store.loadUser(props.params.id, () => props.route.store.selectUser(props.params.id));
    // props.route.store.selectUser(props.params.id);
  }
  render() {
    if (this.props.route.store.selectedUser) {
      return <div>{this.props.route.store.selectedUser.name}</div>
    } else {
      return <div>Loading</div>
    }
  }
}

export default UserContainer;