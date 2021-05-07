import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import MainMenu from './MainMenu';
import A2030 from './A2030';
import Credits from './Credits';
import News from './News';
import Login from './Login';
import {objectives} from './objectives';
import './style.css'

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
		case "login":
			
			break;
	}
	return true;
}

export function a2030Selection(index){
    render(objectives[index].default());
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

ReactDOM.render(
	<React.StrictMode>
		<menuPopup/>
	</React.StrictMode>,
	document.getElementById('menuPopup')
);

render(<MainMenu/>);




