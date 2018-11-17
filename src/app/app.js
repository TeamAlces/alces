import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core';

import { fab } from '@fortawesome/free-brands-svg-icons';
// import { } from '@fortawesome/free-regular-svg-icons'

import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
const icons = [
  fab, faAngleDoubleDown
];

library.add(...icons);

import Home from "./modules/home/home";
import NoMatch from "./modules/404/404";

import "./app.sass";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}
