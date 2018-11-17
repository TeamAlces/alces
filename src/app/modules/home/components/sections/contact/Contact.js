import React, { Component } from "react";
import Section from "../../../../../components/containers/section/section";

import "./contact.sass";

export default class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Section section="contact" />;
  }
}
