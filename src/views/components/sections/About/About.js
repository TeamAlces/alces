import React, { Component } from 'react';
import Container from '../../../components/containers/Container';

import './About.css';

class About extends Component {

  constructor(props) {
    super(props);
  }
  
    render() {
      return (
        <Container containerClass="Section">
          <h1>About us</h1>
        </Container>
      );
    }
  }
  
  export default About;