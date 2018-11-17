import React, { Component } from "react";
import { Col, Row, Grid } from "react-flexbox-grid";
import { Link } from "react-router-dom";

import "./navbar.sass";

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <Grid>
          <Row between="xs">
            <Col>
              <Link to="/">Logo</Link>
            </Col>
            <Col>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Grid>
      </nav>
    );
  }
}
