import React from "react";
const animateName = "animate__tada";
const WelcomeButton = React.memo(({ logo, handleClick }) => {
  const onMouseEnter = () => {
    const bg = document.querySelector(".container");

    bg.classList.add("animate__animated", animateName);
  };
  const onMouseLeave = () => {
    const bg = document.querySelector(".container");
    bg.classList.remove(animateName);
  };
  return (
    <>
      <div className="white-template"></div>

      <div
        className="container"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <img src={logo} className="App-logo" alt="logo" onClick={handleClick} />
      </div>
    </>
  );
});

export default WelcomeButton;
