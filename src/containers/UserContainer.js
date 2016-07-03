import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router'
import Radium from 'radium';

import cardBacking from '../static/layout/backing.svg';

var styles = {
  backing: {
    backgroundImage: `url(${cardBacking})`,
    border: '1px solid red',
    height: 300,
    width: 500,
  }
}

@observer(['store'])
@Radium
class UserContainer extends Component {
  constructor(props) {
    super(props);
    props.store.loadUser(props.params.id, () => props.store.selectUser(props.params.id));
  }
  render() {
    let user;

    if (this.props.store.selectedUser) {
      user = this.props.store.selectedUser;
      const nameParts = user.name.split(' ');
      const firstname =nameParts[0];
      const surname = nameParts[1];
      return (
        <div style={styles.backing}>
          <div>{firstname} <span className="surname">{surname}</span></div>
          <div style={styles.details}>
            <div>{user.company.name}</div>
            <div>{user.company.catchPhrase}</div>
            <div>{user.company.bs}</div>
            <ul style={styles.details}>
              <li><strong>Phone:</strong>{user.email}</li>
              <li><strong>E-Email:</strong>{user.phone}</li>
              <li><strong>URL:</strong> {user.website}</li>
            </ul>
          </div>
        </div>
      )
    } else {
      return <div>Loading</div>
    }
  }
}

export default UserContainer;