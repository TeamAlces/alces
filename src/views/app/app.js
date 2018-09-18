import React, { Component } from 'react';
import Home from '../pages/Home/Home';
import NoMatch from '../pages/404/NoMatch';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';




class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/f' component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}


export default App;

