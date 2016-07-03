import React from 'react';
import { Link } from 'react-router';
import Radium from 'radium';

const styles = {
  button: {
    background: '#CE483B',
    color: '#FFF',
    textDecoration: 'none',
    padding: '5px 10px',
    borderRadius: '40px',
    marginRight: '5px',
  }

}

export default Radium(function(props) {
  return (
    <Link style={styles.button} to={props.to}>{props.children}</Link>
  )
})