import React, { Component } from 'react';
import { Link } from 'react-router';

require('../static/sass/common.scss');

export default class MainContainer extends Component {
  constructor(props, context) {
    super(props);
    console.log(this.context)
  }
  render() {
    return (
      <div className="container">
        <Link to="/">Contact List</Link>
        <Link to="/">Reports</Link>
        {this.props.children}
      </div>
    )
  }
}