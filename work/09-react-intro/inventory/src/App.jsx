import React, { useState } from 'react';
import Reorder from './Reorder'; 
import './App.css'; 

function App() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleReorder = () => {
    setCount(5);
  };

   return (
    <div className="app">
      <div className="inventory-controls">
        <button onClick={handleDecrease} disabled={!count}>-</button>
        <span className="inventory-count">{count}</span>
        <button onClick={handleIncrease}>+</button>
        {count === 0 && <Reorder onReorder={handleReorder} />}
      </div>
    </div>
  );
}

export default App;
