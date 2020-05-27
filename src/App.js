import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./Components/NavBar"
import Bio from "./Components/Bio"
import Projects from "./Components/Projects"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" 
        height="50" width="500" crop="fill"/>
        <h1>
          Kevin Lin Tech Portfolio
        </h1>
        <div>
            <NavBar/>
            <Bio/>
            <Projects/>
        </div>

      </header>
    </div>
  );
}

export default App;
