import React from 'react';
import logo from './assets/button.png';
import './App.css';

function App() {
  const handleClick = (e) => {
    const target = e.target
    const container = document.querySelector('.container')
    const template = document.querySelector('.white-template')

    target.classList.add('click-rotate')
    container.classList.add('click-move')
    template.classList.add('click-move-reverse')
  }
  return (
    <div className="App">
      <header className="App-header">
      <div className='white-template'></div>

      <div className='container'>
          <img src={logo} className="App-logo" alt="logo" onClick={handleClick} />
        </div>
       
      </header>
    </div>
  );
}

export default App;
