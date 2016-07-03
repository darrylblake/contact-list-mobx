import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import UserLink from '../components/UserLink';

const styles =  {
  heading: {
    fontSize: '20px',
    lineHeight: '40px',
    borderBottom: '1px solid #F2F2F2',
    padding: '0 10px',
  },
  number: {
    fontSize: '15px',
    padding: '0 10px',
    background: '#F2F2F2',
    float: 'right',
  },
  users: {
    padding: '10px',
  },
  groups: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  group: {
    flex: 1,
    minWidth: '300px',
    float: 'left',
  }
}

@observer(['store'])
export default class ReportsContainer extends Component {
  componentWillMount() {
    this.props.store.loadUsers();
  }
  renderList() {
    return Object.keys(this.props.store.groupedList).sort((a,b) => {
      return a < b ? -1 : 1;
    }).map((letter, i) => {
      // Maps through each letter.
      let userIDs = this.props.store.groupedList[letter];
      let listOfUsers = userIDs.map((userID, j) => {
        // Maps through each user within the grouped letter.
        let user = this.props.store.users[userID];
        return (
          <div key={j}><UserLink user={user} /></div>
        )
      })
      return (
        <div style={styles.group} key={i}>
          <h2 style={styles.heading}>{letter} <span style={styles.number}>{listOfUsers.length}</span></h2>
          <div style={styles.users}>
            {listOfUsers}
          </div>
        </div>
      )
    });
  }
  render() {
    return (
      <div style={styles.groups}>{this.renderList()}</div>
    )
  }
}