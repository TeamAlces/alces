import React, { Component } from "react";
import Home from "./modules/home/home";
import NoMatch from "./modules/404/404";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
