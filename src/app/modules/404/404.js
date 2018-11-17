import React, { Component } from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Container from "../../components/containers/container/container";
import { Link } from "react-router-dom";

import "./404.sass";

export default class ErrorView extends Component {
  render() {
    return (
      <Container>
        <Header />
        <h1>404 - Page not found</h1>
        <br />
        <Link to="/">Go home</Link>

        <Footer />
      </Container>
    );
  }
}
