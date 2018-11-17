import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";

import "./header.sass";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <Navbar />
        <Hero />
        <a href="#about" className="hero-navigate"><FontAwesomeIcon icon="angle-double-down" size="2x"/></a>
      </header>
    );
  }
}
