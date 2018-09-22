import React, { Component } from 'react';
import Hero from './Hero';
import Navbar from './Navbar';

import './Header.css';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header">
        <Navbar />
        <Hero />
      </header>
    );
  }
}
