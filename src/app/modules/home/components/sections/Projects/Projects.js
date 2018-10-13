import React, { Component } from 'react';
import Section from '../../../../../components/containers/section/section';

import './Projects.css';

class Projects extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Section section="projects">
        <h1>Projects</h1>
      </Section>
    );
  }
}

export default Projects;
