import React, { Component } from 'react';
import Button from '../components/Button';
import Radium from 'radium';
import { observer } from 'mobx-react';

require('../static/sass/common.scss');

const styles = {
  container: {
    margin: '20px auto',
    fontFamily: 'Lato',
    fontSize: '15px',
    lineHeight: '22px',
    color: '#1E1F1F',
    border: '1px solid #F2F2F2',
    padding: '20px',
    position: 'relative',
  },
  nav: {
    marginBottom: '20px',
  },
  heading: {
    fontSize: '40px',
    textAlign: 'center',
    marginBottom: '20px',
  },
  loading: {
    background: '#F2F2F2',
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '5px',
  }
}

@observer(['store'])
export default class MainContainer extends Component {
  renderLoading() {
    if(this.props.store.loading) {
      return <div>Loading...</div>
    }
    return <div>Synced</div>;
  }
  render() {
    return (
      <div style={styles.container} className="group main-container">
        <div style={styles.loading}>
          {this.renderLoading()}
        </div>
        <h1 style={styles.heading}>Contact List</h1>
        <div style={styles.nav}>
          <Button to='/'>Contact List</Button>
          <Button to='/reports'>Reports</Button>
        </div>
        {this.props.children}
      </div>
    )
  }
}