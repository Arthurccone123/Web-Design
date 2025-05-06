import React from 'react';
import SportsCard from './SportsCard';
import './Sports.css'; 
import Navbar from './Navbar';



const Sports = () => {
  return (
    <div id="sports">
      <h1>Boston Sports Teams</h1>
      <div className="sports-cards-container">
        <SportsCard
          team="Celtics"
          color="#007A33"
          description="The Boston Celtics are a professional basketball team based in Boston, Massachusetts."
          website="https://www.nba.com/celtics/"
        />
        <SportsCard
          team="Bruins"
          color="#000000"
          description="The Boston Bruins are a renowned NHL ice hockey team, with multiple Stanley Cup championships."
          website="https://www.nhl.com/bruins/"
        />
        <SportsCard
          team="Red Sox"
          color="#BD3039"
          description="The Boston Red Sox are a celebrated MLB baseball team, playing their home games at Fenway Park."
          website="https://www.mlb.com/redsox/"
        />
      </div>
    </div>
  );
}

export default Sports;
