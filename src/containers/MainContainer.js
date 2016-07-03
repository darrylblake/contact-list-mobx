import React, { Component } from 'react';
import { Link } from 'react-router';

export default class MainContainer extends Component {
  render() {
    return (
      <div>
        <Link to="/">Contact List</Link>
        <Link to="/">Reports</Link>
        {this.props.children}
      </div>
    )
  }
}