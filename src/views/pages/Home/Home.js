import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Container from '../../components/containers/Container';
import About from '../../components/Sections/About/About';
import Projects from '../../components/Sections/Projects/Projects';



import '../../../Style/index.css';



class Home extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        
          <Header/>
            <About/>  
            <Projects/>
            <About/>
            <Projects/>
          <Footer/>
        
      </Container>
    );
  }
}

export default Home;


