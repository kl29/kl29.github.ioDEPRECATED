import React from 'react';
import logo from './logo.svg';
import './App.css';
import Bio from "./Components/Bio"
import Projects from "./Components/Projects"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Kevin Lin Portfolio</h1>
        <Bio/>
        <Projects/>
      </header>
    </div>
  );
}

export default App;
