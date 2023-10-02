import React from 'react';
import logo from '../../stockArmySoldier.jpg';
import '../../styles/AboutMe.css';

export default function AboutMe() {
  return (
    <div className="AboutMe">
      <h1>About Us:</h1>
      <a>
      <img src={logo} alt="Logo" />
      </a>
      <p>
        "We are a Veteran owned and run company serving the greater Charlotte area...
      </p>
    </div>
  );
}
