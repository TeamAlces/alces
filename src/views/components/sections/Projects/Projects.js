import React, { Component } from 'react';
import Container from '../../../components/containers/Container';
import { Grid } from 'react-flexbox-grid';


import './Projects.css';

class Projects extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
      return (
        <Container containerClass="Section">
        <Grid>
          <h1>Projects</h1>
          </Grid>
        </Container>
      );
    }
  }
  
  export default Projects;