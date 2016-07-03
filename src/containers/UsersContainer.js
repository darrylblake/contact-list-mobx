import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import { Link, hashHistory } from 'react-router'

@observer
class MainContainer extends Component {
  componentWillMount() {
    this.props.route.store.loadUsers();
  }

  reverse() {
    this.props.route.store.reverse();
  }

  selectUser(id) {
    this.props.route.store.selectUser(id);
  }

  renderRows() {
    const { users, tempList, loading } = this.props.route.store;
    return tempList.map(userID => {
      let user = users[userID];
      return (
        <tr>
          <td><Link to={`/user/${userID}`} onClick={() => this.selectUser(userID)}>{user.name}</Link></td>
          <td>{user.username}</td>
          <td><a href={`mailto:${user.email}`}>{user.email}</a></td>
          <td><a href={`tel:${user.phoneValid}`}>{user.phone}</a></td>
          <td><a href={`http://${user.website}`} target="_blank">{user.website}</a></td>
          <td>{user.company.name}</td>          
        </tr>
      )
    });
  }
  renderList() {
    return (
      <div>
        <input 
          type="text" 
          value={this.props.route.store.searchField} 
          onChange={(e) => this.props.route.store.search(e.target.value)} />
        <table>
          <thead>
            <tr>
              <th onClick={() => this.sort('name')}>Name</th>
              <th onClick={() => this.sort('username')}>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    )
  }
  renderLoading() {
    return <div>Loading</div>
  }
  render() {
    if(this.props.route.store.loading) return this.renderLoading();
    else {
      return this.renderList();
    }
  }
}

export default MainContainer;