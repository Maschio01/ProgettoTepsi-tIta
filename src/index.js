import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import MainMenu from './MainMenu';
import A2030 from './A2030';
import Credits from './Credits';
import News from './News';
import O1 from './objectives/O1';
import O2 from './objectives/O2';
import O3 from './objectives/O3';
import O4 from './objectives/O4';
import O5 from './objectives/O5';
import O6 from './objectives/O6';
import O7 from './objectives/O7';
import O8 from './objectives/O8';
import O9 from './objectives/O9';
import O10 from './objectives/O10';
import O11 from './objectives/O11';
import O12 from './objectives/O12';
import O13 from './objectives/O13';
import O14 from './objectives/O14';
import O15 from './objectives/O15';
import O16 from './objectives/O16';
import O17 from './objectives/O17';
import './style.css'

var objectives = [<O1/>, <O2/>, <O3/>, <O4/>, <O5/>, <O6/>, <O7/>, <O8/>, <O9/>, <O10/>, <O11/>, <O12/>, <O13/>, <O14/>, <O15/>, <O16/>, <O17/>];

export function menuSelection(destination){
	switch(destination){
		case "menu":
			render(<MainMenu/>);
			break;
		case "a2030":
			render(<A2030/>);
			break;
		case "news":
			render(<News/>);
			break;
		case "credits":
			render(<Credits/>);
			break;
	}
	return true;
}

function render(element){
	ReactDOM.render(
		<React.StrictMode>
		<Navbar/>
		{element}
		</React.StrictMode>,
		document.getElementById('root')
	);
}

render(<MainMenu/>);



