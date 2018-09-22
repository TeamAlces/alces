import React, { Component } from 'react';
import ImageSlide from './ImageSlide';
import Arrow from './Arrow';

import './Carousel.css';

const imgUrls = [
    "https://placeimg.com/550/500/nature", 
    "https://placeimg.com/550/500/arch",
    "https://placeimg.com/550/500/animals",
    "https://placeimg.com/550/500/people",
    "https://placeimg.com/550/500/tech"
];

export default class Carousel extends Component {

    constructor(props) {
      super(props);

      this.state = {
        currentImageIndex: 0,
        hover: 1
      };

      this.nextSlide = this.nextSlide.bind(this);
      this.previousSlide = this.previousSlide.bind(this);
      this.onHoverHandler = this.nextSlide.bind(this);
      this.offHoverHandler = this.previousSlide.bind(this);
      
    }

    
    previousSlide () {
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
    
        this.setState({
          currentImageIndex: index
        });
    }

    nextSlide () {
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index =  shouldResetIndex ? 0 : currentImageIndex + 1;
    
        this.setState({
          currentImageIndex: index
        });
    }

    render() {
      return (
    
          <div className="carousel" >
            <Arrow
            direction="left"
            clickFunction={ this.previousSlide }
            glyph="&#9664;" />
            

            <ImageSlide url={ imgUrls[this.state.currentImageIndex] } />

            <Arrow
            direction="right"
            clickFunction={ this.nextSlide }
            glyph="&#9654;" />  
          </div>
      );
    }
  }
