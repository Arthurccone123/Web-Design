import React from 'react';
import Gallery from './Gallery'; 
import Navbar from './Navbar';

const University = () => {
  return (
    <div id="university">
      <h1>The university I have visited</h1>
      <p>In Boston, I have visited MIT and NEU. I have very profound impressions of these two schools. Below are some pictures I took. You can choose to view photos of each school.</p>
      <Gallery />
    </div>
  );
}

export default University;
