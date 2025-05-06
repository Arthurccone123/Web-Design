import React, { useState } from 'react';
import './ImageSlider.css';
import Photo5 from './images/Photo5.JPG';
import Photo6 from './images/Photo6.JPG';
import Photo7 from './images/Photo7.JPG';
import Photo8 from './images/Photo8.JPG';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [Photo5, Photo6, Photo7, Photo8];

  const goToPrevSlide = () => {
    const newIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="image-slider">
      <div className="slide-container">
        {images.map((image, index) => (
          <div key={index} className={index === currentIndex ? "slide active" : "slide"}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
        <button className="prev-btn" onClick={goToPrevSlide}>Prev</button>
        <button className="next-btn" onClick={goToNextSlide}>Next</button>
      </div>
    </div>
  );
};

export default ImageSlider;
