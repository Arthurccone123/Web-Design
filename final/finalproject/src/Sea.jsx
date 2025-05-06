import React from 'react';
import ImageSlider from './ImageSlider'; 

const Sea = () => {
  return (
    <div id="sea">
      <h1>The sea near Boston</h1>
      <p>The photos are taken near the coastline in Boston.You can click on 'Previous' and 'Next' to switch.</p>
      <ImageSlider /> 
    </div>
  );
}

export default Sea;
