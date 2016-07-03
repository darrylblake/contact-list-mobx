import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router'

@observer(['store'])
class UserContainer extends Component {
  constructor(props) {
    super(props);
    props.store.loadUser(props.params.id, () => props.store.selectUser(props.params.id));
  }
  render() {
    if (this.props.store.selectedUser) {
      return <div>{this.props.store.selectedUser.name}</div>
    } else {
      return <div>Loading</div>
    }
  }
}

export default UserContainer;