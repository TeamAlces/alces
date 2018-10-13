import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Container from '../../components/containers/container/Container';
import About from './components/sections/about/about';
import Projects from './components/sections/projects/Projects';
import Contact from './components/sections/contact/contact';

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
