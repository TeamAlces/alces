import React, { Component } from 'react';
import Section from '../../../../../components/containers/section/section';

import './About.css';

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Section section="about">
        <h1>About us</h1>
      </Section>
    );
  }
}

export default About;
