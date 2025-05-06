import React from 'react';
import BruinsImage from './images/Bruins.JPG';
import RedSoxImage from './images/RedSox.JPG';
import CelticsImage from './images/Celtics.JPG';
import './SportsCard.css';


const SportsCard = ({ team, color, description, website }) => {
  let teamImage;
  switch (team) {
    case 'Bruins':
      teamImage = BruinsImage;
      break;
    case 'Red Sox':
      teamImage = RedSoxImage;
      break;
    case 'Celtics':
      teamImage = CelticsImage;
      break;
    default:
      teamImage = null;
  }

  return (
    <div className="sports-card" style={{ backgroundColor: color }}>
      <img src={teamImage} alt={team} />
      <p>{description}</p>
      <a href={website} target="_blank" rel="noopener noreferrer">Learn More</a>
    </div>
  );
}

export default SportsCard;
