import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import './Navbar.css';


class Navbar extends Component {
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
                <li><a href="#">Home</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">About</a></li>
              </ul>
            </Col>
            </Row>
        </Grid>
      </nav>
      
      
    );
  }
}

export default Navbar;
