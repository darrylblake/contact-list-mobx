import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import UserLink from '../components/UserLink';

const styles =  {
  search: {
    float: 'right',
    padding: '5px 10px',
    fontSize: '15px',
    borderRadius: '40px',
    border: '1px solid #F0F0F0',
  }
}

@observer(['store'])
class MainContainer extends Component {
  componentWillMount() {
    this.props.store.loadUsers();
  }

  renderRows() {
    const { users, tempList, loading } = this.props.store;
    return tempList.map((userID, i) => {
      let user = users[userID];
      return (
        <tr key={i}>
          <td><UserLink user={user} /></td>
          <td>{user.username}</td>
          <td><a href={`mailto:${user.email}`}>{user.email}</a></td>
          <td><a href={`tel:${user.phoneValid}`}>{user.phone}</a></td>
          <td><a href={`http://${user.website}`} target="_blank">{user.website}</a></td>
          <td>{user.company.name}</td>          
        </tr>
      )
    });
  }
  sort(column) {
    const users = this.props.store.users
    let previousSortColumn = this.props.store.previousSortColumn;
    const sortedList = this.props.store.tempList.sort((a, b) => {
      if(previousSortColumn === column) {
        return users[a][column] > users[b][column] ? -1 : 1;
      } else {
        return users[a][column] > users[b][column] ? 1 : -1;
      }
    });
    // Toggling the sort...
    if(previousSortColumn !== column)
      this.props.store.previousSortColumn = column;
    else
      this.props.store.previousSortColumn = undefined;
    this.props.store.tempList = sortedList.slice();
  }
  render() {
    return (
      <div>
        <input 
          style={styles.search}
          type="text"
          placeholder="Search contacts..."
          value={this.props.store.searchField} 
          onChange={(e) => this.props.store.search(e.target.value)} />
        <table>
          <thead>
            <tr>
              <th onClick={() => this.sort('name')}>Name</th>
              <th onClick={() => this.sort('username')}>Username</th>
              <th onClick={() => this.sort('email')}>Email</th>
              <th onClick={() => this.sort('phone')}>Phone</th>
              <th onClick={() => this.sort('website')}>Website</th>
              <th onClick={() => this.sort('company')}>Company</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default MainContainer;