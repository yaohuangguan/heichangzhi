import React from "react";

const WelcomeButton = ({ logo, handleClick }) => {
  return (
    <>
      <div className="white-template"></div>

      <div className="container">
        <img src={logo} className="App-logo" alt="logo" onClick={handleClick} />
      </div>
    </>
  );
};

export default WelcomeButton;
