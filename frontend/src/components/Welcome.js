import React from "react";
import '../styles/welcomeStyle.css'; 

const Welcome = ({ onLoginClick }) => { // Accept the prop
  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Welcome to BookMaster!</h1>
      <h2 className="welcome-subtitle">
        Your reliable partner in managing the daily workings of your center of knowledge!
      </h2>
      <h3 className="welcome-instruction">Please press the button below to login:</h3>
      <button className="login-button" onClick={onLoginClick}>Login</button> {/* Add the click handler */}
    </div>
  );
};

export default Welcome;
