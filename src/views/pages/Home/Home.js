import React, { Component } from 'react';
import Footer from '../../components/containers/Footer';
import Header from '../../components/containers/Header';
import Container from '../../components/containers/Container';

import '../../../Style/index.css';



class Home extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Header/>
        <h1>Alces</h1>
        <Footer/>
      </Container>
    );
  }
}

export default Home;


