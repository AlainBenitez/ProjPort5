import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Header</h1>
      </header>
    );
  }
}

export default Header;

const styles = {
  container: {
    width: '90%',
    color: 'red'
  },
  p: {
    color: 'blue'
  }
}