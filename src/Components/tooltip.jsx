import React, { useState } from 'react';
import './tooltip.css'; // Import the CSS file for styling

const Tooltip = ({ position, children }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleMouseOver = () => {
    setIsTooltipVisible(true);
  };

  const handleMouseOut = () => {
    setIsTooltipVisible(false);
  };

  return (
    <div className="tooltip-container">
      <button
        className={`tooltip-button ${isTooltipVisible ? 'active' : ''}`}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Hover Me
      </button>
      <div
        className={`tooltip ${position} ${isTooltipVisible ? 'visible' : ''}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Tooltip;
