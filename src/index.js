import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import MainMenu from './MainMenu';
import A2030 from './A2030';
import Credits from './Credits';
import News from './News';
import './style.css'


ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <A2030/>
  </React.StrictMode>,
  document.getElementById('root')
);

