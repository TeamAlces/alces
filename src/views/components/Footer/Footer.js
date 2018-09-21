import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-flexbox-grid';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <Grid fluid>
          <Row between="xs" center="md" >
            <Col md={4}>
              Team Alces &copy;
            </Col>
            <Col md={4}>
              Col 2
            </Col>
            <Col md={4}>
              Col 3
            </Col>
          </Row>
        </Grid>
      </footer>
    );
  }
}
