import React from 'react';
import './CenteredImageComponent.css'; // Import your CSS file
import logo from '../assets/logo-light.png'

const CenteredImageComponent = () => {
  return (
    <div className="centered-container">
      <div className="centered-image">
        <img src={logo}  />
      </div>
    </div>
  );
};

export default CenteredImageComponent;