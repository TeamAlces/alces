import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-flexbox-grid';
import './Hero.css';


class Hero extends Component {
  render() {
    return (
      <Grid className="hero">
        <Row center="xs">
          <Col md={4}>
            <h1>Alces Development</h1>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Hero;
