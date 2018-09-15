import React from 'react';
import Home from '../pages/Home/Home';
import NoMatch from '../pages/404/NoMatch';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = () => {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
}


export default App;
