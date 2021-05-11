import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import MainMenu from './MainMenu';
import A2030 from './A2030';
import Credits from './Credits';
import News from './News';
import * as MenuPopup from './MenuPopup';
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
			if(MenuPopup.state==MenuPopup.STATE_CLOSE){
				MenuPopup.open();
			}
			else if(MenuPopup.state==MenuPopup.STATE_OPEN){
				MenuPopup.close();
			}
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
		{MenuPopup.Signup()}
	</React.StrictMode>,
	document.getElementById('menuPopup')
);

render(<MainMenu/>);




