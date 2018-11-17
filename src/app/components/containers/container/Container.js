import React, { Component } from "react";
import { Grid } from "react-flexbox-grid";
import PropTypes from "prop-types";

import "./container.sass";

class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid fluid className={this.props.containerClass || "page"}>
        {this.props.children}
      </Grid>
    );
  }
}

export default Container;

Container.propTypes = {
  containerClass: PropTypes.string
};
