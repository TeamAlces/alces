import React, { Component } from "react";
import Section from "../../../../../components/containers/section/section";

import "./about.sass";

export default class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Section section="about" />;
  }
}
