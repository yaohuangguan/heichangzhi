import React from "react";
import logo from "./assets/button.png";
import "./App.css";
import WelcomeButton from "./components/WelcomeButton";
function App() {
  const handleClick = (e) => {
    const target = e.target;
    const container = document.querySelector(".container");
    const template = document.querySelector(".white-template");

    target.classList.add("click-rotate");
    container.classList.add("click-move");
    template.classList.add("click-move-reverse");
  };
  return (
    <div className="App">
      <div className="App-header">
        <WelcomeButton logo={logo} handleClick={handleClick} />
    
      </div>
    </div>
  );
}

export default App;
