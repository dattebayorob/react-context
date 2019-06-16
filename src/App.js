import React from 'react';
import './App.css';
import { Routes } from './app/routes';
import { MariaCtx } from './app/context/Maria';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Using context Api
        </p>
        <br />
        <Routes />
      </header>
    </div>
  );
}

export default (props) => (
  <MariaCtx>
    <App {...props} />
  </MariaCtx>  
)
