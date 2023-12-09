import React, { useState } from 'react';
import './AnimatedTextComponent.css'; // Import your CSS file
import { Link } from 'react-router-dom';

const AnimatedTextComponent = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <Link to='/StaffLogin'> <div className={`animated-text ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleHover} onMouseLeave={handleHover}>
      For Trainers
    </div></Link>
  );
};

export default AnimatedTextComponent;