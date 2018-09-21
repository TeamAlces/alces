import React, { Component } from 'react';
import Section from '../../../components/containers/Section';

import './Contact.css';

class Contact extends Component {

  constructor(props) {
    super(props);
  }
  
    render() {
      return (
        <Section section='contact'>
          <h1>Contact us</h1>
        </Section>
      );
    }
  }
  
  export default Contact;