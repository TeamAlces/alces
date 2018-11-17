import React, { Component } from "react";
import { Col, Row, Grid } from "react-flexbox-grid";
import Zoom from "react-reveal";
import "./hero.sass";

export default class Hero extends Component {
  render() {
    return (
      <Grid className="hero">
        <Row>
          <Col md={4}>
            <Zoom>
              <h1>Team Alces</h1>
            </Zoom>
          </Col>
        </Row>
      </Grid>
    );
  }
}
