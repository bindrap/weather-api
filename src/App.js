import React from 'react';
import './App.css';
import Forecast from "./components/Forecast/Forecast";
import Logo from './components/Logo/Logo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <h1> Weather App </h1>
      </header>
      <main>
        <Forecast />
      </main>
      <footer>
        Page created by Parteek Bindra
      </footer>
    </div>
  );
}

export default App;
