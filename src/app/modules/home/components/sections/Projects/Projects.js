import React, { Component } from "react";
import { Row } from "react-flexbox-grid";
import ProjectShowcase from './components/project-showcase';
import Section from "../../../../../components/containers/section/section";

import "./projects.sass";

const projects = [
  {
    project: 1
  },
  {
    project: 2
  },
  {
    project: 3
  },
  {
    project: 4
  }
];

export default class Projects extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Section section="projects">
        <Row center="xs" className="projects-wrapper">
          { projects && projects.map (( p , i ) => (
            <ProjectShowcase key={i}/>
            ))
          }
        </Row>
      </Section>
    );
  }
}
