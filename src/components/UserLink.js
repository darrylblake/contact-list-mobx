import React, { Component} from 'react';
import { observer } from 'mobx-react';
import { hashHistory } from 'react-router';

@observer(['store'])
export default class UserLink extends Component {
  selectUser(id) {
    this.props.store.selectUser(id);
    hashHistory.push(`/user/${id}`)
  }
  render() {
    return <span className="link" onClick={() => this.selectUser(this.props.user.id)}>{this.props.user.name}</span>
  }
}