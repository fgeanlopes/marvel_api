import React from 'react';
import ListApi from "./ListApi";

import './App.css';
const logoMarvel = require("./dist/img/MarvelLogo.svg");

function App() {
  return (
    <div className="App">
      <div className="header">
        <img className="logoMarvel" src={logoMarvel} title="logo da Marvel" alt="logo da Marvel" />
      </div>
      <ListApi />
    </div >
  );
}
export default App;
