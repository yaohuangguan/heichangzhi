import React from "react";
import logo from "./assets/button.png";
import "./App.css";
import WelcomeButton from "./components/WelcomeButton";
import WhiteBackground from "./components/Background";
const animationName = "animate__fadeInDown";
const App = () => {
  const handleClick = React.useCallback((e) => {
    const target = e.target;
    const container = document.querySelector(".container");
    const template = document.querySelector(".white-template");
    const bg = document.querySelector(".white-background");
    target.classList.add("click-rotate");
    container.classList.add("click-move");
    template.classList.add("click-move-reverse");
    setTimeout(() => {
      bg.style.display = "block";
      bg.classList.add("animate__animated", animationName);
    }, 3500);
  }, []);
  return (
    <React.Fragment>
      <div className="App-header">
        <WelcomeButton logo={logo} handleClick={handleClick} />
        <WhiteBackground />
      </div>
    </React.Fragment>
  );
};

export default App;
