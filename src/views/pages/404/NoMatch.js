import React, { Component } from 'react';
import Footer from '../../components/containers/Footer';
import Header from '../../components/containers/Header';
import Container from '../../components/containers/Container';
import { Link } from 'react-router-dom';

class NoMatch extends Component {
  render() {
    return (
      <Container>
        <Header/>
        <h1>404 - Page not found</h1>
        <br/>
        <Link to="/">Go home</Link>

        <Footer/>
      </Container>
    );
  }
}

export default NoMatch;

