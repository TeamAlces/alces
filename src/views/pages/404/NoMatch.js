import React, { Component } from 'react';
import Footer from '../../components/containers/Footer';
import Header from '../../components/containers/Header';
import Container from '../../components/containers/Container';

import '../../../Style/index.css';

class NoMatch extends Component {
  render() {
    return (
      <Container>
        <Header/>
        <h1>404</h1>
        <Footer/>
      </Container>
    );
  }
}

export default NoMatch;

