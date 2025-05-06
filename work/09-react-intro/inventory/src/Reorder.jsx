import React from 'react';
import './Reorder.css'; 

const Reorder = ({ onReorder }) => {
    return (
        <button onClick={onReorder} className="reorder-btn fade-in">Reorder</button>
    );
}

export default Reorder;
