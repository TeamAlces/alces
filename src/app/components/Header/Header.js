import React, { Component } from 'react';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';

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
