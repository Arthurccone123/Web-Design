import React, { useState, useEffect } from 'react';
import Photo1 from './images/Photo1.JPG';
import Photo2 from './images/Photo2.JPG';
import Photo3 from './images/Photo3.JPG';

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [Photo1, Photo2, Photo3]; 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <img 
        src={images[currentImageIndex]} 
        alt={`Photo ${currentImageIndex + 1}`} 
        style={{ width: '500px', height: '300px' }} 
      />
    </div>
  );
}

export default Carousel;
