import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Container from '../../components/containers/Container';
import About from '../../components/Sections/About/About';
import Projects from '../../components/Sections/Projects/Projects';
import Contact from '../../components/Sections/Contact/Contact';

import '../../../Style/index.css';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </Container>
    );
  }
}
