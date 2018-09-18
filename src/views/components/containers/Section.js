import React, { Component } from 'react';
import { Grid } from 'react-flexbox-grid';

import './Container.css';


class Container extends Component {
  render() {
    return (
    <Grid fluid className="section">
        {this.props.children}
    </Grid>    
    );
  }
}

export default Container;
