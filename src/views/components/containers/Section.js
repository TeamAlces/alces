import React, { Component } from 'react';
import { Grid } from 'react-flexbox-grid';

import './Section.css';


class Section extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Grid className={this.props.section +' '+  'section'}>
        {this.props.children}
      </Grid>
    );
  }
}

export default Section;
