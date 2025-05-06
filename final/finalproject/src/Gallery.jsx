import React, { useState } from 'react';
import './Gallery.css'; 

import MIT1 from './images/MIT1.JPG';
import MIT2 from './images/MIT2.JPG';
import MIT3 from './images/MIT3.JPG';
import MIT4 from './images/MIT4.JPG';
import MIT5 from './images/MIT5.JPG';
import MIT6 from './images/MIT6.JPG';
import MIT7 from './images/MIT7.JPG';
import NEU1 from './images/NEU1.JPG';
import NEU2 from './images/NEU2.JPG';
import NEU3 from './images/NEU3.JPG';
import NEU4 from './images/NEU4.JPG';
import NEU5 from './images/NEU5.JPG';
import NEU6 from './images/NEU6.JPG';
import NEU7 from './images/NEU7.JPG';
import NEU8 from './images/NEU8.JPG';
import NEU9 from './images/NEU9.JPG';

const Gallery = () => {
  const [images, setImages] = useState([
    { id: 1, title: 'MIT Image 1', category: 'MIT', src: MIT1 },
    { id: 2, title: 'MIT Image 2', category: 'MIT', src: MIT2 },
    { id: 3, title: 'MIT Image 3', category: 'MIT', src: MIT3 },
    { id: 4, title: 'MIT Image 4', category: 'MIT', src: MIT4 },
    { id: 5, title: 'MIT Image 5', category: 'MIT', src: MIT5 },
    { id: 6, title: 'MIT Image 6', category: 'MIT', src: MIT6 },
    { id: 7, title: 'MIT Image 7', category: 'MIT', src: MIT7 },
    { id: 8, title: 'NEU Image 1', category: 'NEU', src: NEU1 },
    { id: 9, title: 'NEU Image 2', category: 'NEU', src: NEU2 },
    { id: 10, title: 'NEU Image 3', category: 'NEU', src: NEU3 },
    { id: 11, title: 'NEU Image 4', category: 'NEU', src: NEU4 },
    { id: 12, title: 'NEU Image 5', category: 'NEU', src: NEU5 },
    { id: 13, title: 'NEU Image 6', category: 'NEU', src: NEU6 },
    { id: 14, title: 'NEU Image 7', category: 'NEU', src: NEU7 },
    { id: 15, title: 'NEU Image 8', category: 'NEU', src: NEU8 },
    { id: 16, title: 'NEU Image 9', category: 'NEU', src: NEU9 },
  ]);

  const [filter, setFilter] = useState('All');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredImages = filter === 'All' ? images : images.filter(image => image.category === filter);
  const sortedImages = [...filteredImages].sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div>
      <select value={filter} onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="MIT">MIT</option>
        <option value="NEU">NEU</option>
      </select>

      <div className="gallery">
        {sortedImages.map(image => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.title} style={{ width: '300px', height: '300px' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
