import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const SlidingComponent = ({ carousel }) => {
  return (
    <div className="slide-container">
      <Slide duration={3000} transitionDuration={1000}>
        {carousel.map((image, index) => (
          <div className="each-slide" key={index} style={{height:"600px", width:"100%", display: 'flex', justifyContent: 'center'}}>
            <div style={{ 'backgroundImage': `url(${image.image})`, width:"100%", height:"95%" }}>
              <span>{image.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default SlidingComponent;
