import React from 'react';
import logo from './assets/btn.png';
import './App.css';

function App() {
  const handleClick = (e) => {
    const target = e.target
    const container = document.querySelector('.container')

    console.log(target)
    target.classList.add('click-rotate')
    container.classList.add('click-move')
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
          <img src={logo} className="App-logo" alt="logo" onClick={handleClick} />
        </div>
       
      </header>
    </div>
  );
}

export default App;
