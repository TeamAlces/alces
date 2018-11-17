import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid, Row } from "react-flexbox-grid";

import "./section.sass";

class Section extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section
        id={this.props.section}
        className={this.props.section + " " + "section"}
      >
        <Grid>
          <Row center="xs">{this.props.children}</Row>
        </Grid>
      </section>
    );
  }
}

export default Section;

Section.propTypes = {
  section: PropTypes.oneOf(["about", "contact", "projects"]).isRequired
};
