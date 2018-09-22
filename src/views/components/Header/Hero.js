import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-flexbox-grid';
import Carousel from '../Carousel/Carousel.js'
import './Hero.css';


export default class Hero extends Component {
  render() {
    return (
      <Grid className="hero">
        <Row between="md" middle="md">
          <Col md={4}>
            <h1>Team Alces</h1>
          </Col>

          <Carousel />

        </Row>
      </Grid>
    );
  }
}
