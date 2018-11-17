import React, { Component } from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Container from "../../components/containers/container/container";
import About from "./components/sections/about/about";
import Projects from "./components/sections/projects/projects";
import Contact from "./components/sections/contact/contact";


import "./home.sass";

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
