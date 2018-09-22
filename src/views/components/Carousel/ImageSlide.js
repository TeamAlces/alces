import React from 'react';

const ImageSlide = ({ url }) => {
    const styles = {
      backgroundImage: `url(${url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'

    };
  
    return (
      <div className="image-slide" style={styles}></div>
    );
}

export default ImageSlide;


