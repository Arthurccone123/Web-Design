import React from 'react';
import Carousel from './Carousel';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div id="home">
      <h1>Welcome to Boston!</h1>
      <Carousel />
      <div>
        <p>Boston, located in Massachusetts, is a city steeped in history and culture. As one of the oldest cities in the United States, its cobblestone streets and historic sites tell the story of the American Revolution. Key landmarks like the Freedom Trail and Fenway Park embody Boston's rich heritage and sports legacy, while institutions like Harvard University and MIT highlight its academic prestige.</p>
        <p>Beyond its historical significance, Boston is a hub of cultural diversity and innovation. Its neighborhoods offer a blend of experiences, from the bustling streets of Downtown Crossing to the charm of Beacon Hill. The city's culinary scene is renowned for its seafood, particularly its lobster rolls and clam chowder. Bostonians take pride in their city's resilience and sense of community, showcased through events like the Boston Marathon and Fourth of July celebrations. </p>
      </div>
    </div>
  );
}

export default Home;
