import React, { Component } from 'react';
import { Grid } from 'react-flexbox-grid';

import './Container.css';


export default class Container extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
    <Grid fluid className={ this.props.containerClass || 'page' }>
        {this.props.children}
    </Grid>    
    );
  }
}
