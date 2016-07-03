import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router'
import Radium from 'radium';

import cardBacking from '../static/layout/backing.svg';

var styles = {
  backing: {
    margin: '0 auto',
    backgroundImage: `url(${cardBacking})`,
    height: 300,
    width: 500,
    position: 'relative',
  },
  details: {
    width: '50%',
    paddingLeft: '10px',
    marginTop: '20px',
    float: 'right',
    borderLeft: '3px solid #1E1F1F',
  },
  name: {
    padding: '20px',
    float: 'left',
    width: '50%',
    fontSize: 30,
    lineHeight: '30px',
    last: {
      fontWeight: 300,
    },
    first: {
      color: '#CE483B',
      fontWeight: 700,
      'background': '-webkit-linear-gradient(#CF483B, #9C332C)',
      'WebkitBackgroundClip': 'text',
      'WebkitTextFillColor': 'transparent',
    }
  },
  description: {
    fontStyle: 'italic',
    fontWeight: 700,
    marginBottom: '5px',
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
      const firstname = nameParts.shift();
      const lastname = nameParts.join(' ');
      return (
        <div style={styles.backing}>
          <div style={styles.name}>
            <span style={styles.name.first}>{firstname}</span> <span style={styles.name.last}>{lastname}</span>
          </div>
          <div style={styles.details}>
            <ul style={styles.description}>
              <li>{user.company.name}</li>
              <li>{user.company.catchPhrase}</li>
              <li>{user.company.bs}</li>
            </ul>
            <ul>
              <li><strong>Phone:</strong> <em>{user.email}</em></li>
              <li><strong>E-Email:</strong> <em>{user.phone}</em></li>
              <li><strong>URL:</strong> <em>{user.website}</em></li>
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