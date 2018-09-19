import React, { Component } from 'react';
import { Grid, Row } from 'react-flexbox-grid';

import './Section.css';


class Section extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (

        <section className={this.props.section +' '+ 'section'}>
          <Grid>
            <Row center="xs">
              {this.props.children}
            </Row>
          </Grid>
        </section>

    );
  }
}

export default Section;
