import React, { Component } from "react";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";

import "./header.sass";

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
