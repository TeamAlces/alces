import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-flexbox-grid';
import './Footer.sass';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <Grid fluid>
          <Row between="xs" center="md">
          <Col md={4}><p>Copyright &copy; Team Alces</p></Col>
            <Col md={4}><p>LOGO</p></Col>
            <Col md={4}>
            <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                 <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Projects</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Grid>
      </footer>
    );
  }
}
