import React from 'react';
import './App.css';
import { Routes } from './app/routes';

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

export default (props) => <App {...props} />