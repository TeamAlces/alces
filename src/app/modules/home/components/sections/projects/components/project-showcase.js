import React, { Component } from "react";
import { Row, Col } from "react-flexbox-grid";

import "./project-showcase.sass";

export default class ProjectShowcase extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Col xs={6} className="project">
        <Row>
            <Col xs={6} className="project-info">
              <h1>Lorem ipsum</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <p>laboris nisi ut aliquip ex ea commodo consequat</p>
              <button>Lorem ipsum</button>
            </Col>
            <Col xs={6} className="project-preview">
              <div className="project-preview--box"></div>
            </Col>
        </Row>
      </Col>
    );
  }
}
