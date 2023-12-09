import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AnimatedTextComponent2.css'; // Import your CSS file

const AnimatedTextComponent2 = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <Link to='/TraineeLogin'><div className={`animated-text2 ${isHovered ? 'hovered2' : ''}`} onMouseEnter={handleHover} onMouseLeave={handleHover}>
      For Trainerees
    </div></Link>
  );
};

export default AnimatedTextComponent2;