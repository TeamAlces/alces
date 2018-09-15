import React, { Component } from 'react';
import Footer from '../../components/containers/Footer';
import Header from '../../components/containers/Header';

import '../../../Style/index.css';

class NoMatch extends Component {
  render() {
    return (
      <div>
        <Header/>
        <h1>404</h1>
        <Footer/>
      </div>
    );
  }
}

export default NoMatch;

