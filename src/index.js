import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import MainMenu from './MainMenu';
import './style.css'


ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <MainMenu/>
  </React.StrictMode>,
  document.getElementById('root')
);

