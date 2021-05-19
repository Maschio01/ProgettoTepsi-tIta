import {menuSelection} from './index';
import * as circleMenu from './circleMenu';

function Navbar(){
    return (
        <div>
            <div className="navbar">
                <a href="#" onClick={()=>menuSelection("login")}><img className="navbarImage" src="img/user1.png"/></a>
                <p className="navbarLink"><a href="#" onClick={()=>menuSelection("credits")}>Contattaci</a></p>
                <p className="navbarLink"><a href="#" onClick={()=>menuSelection("a2030")}>Agenda 2030</a></p>
                <p className="navbarLink"><a href="#" onClick={()=>menuSelection("news")}>Notizie</a></p>
                <p className="navbarLink"><a href="#" onClick={()=>menuSelection("menu")}>Menu</a></p>
            </div>
            <input type="button" value="Suggerimenti" id="buttonPlay" className="BTNstartMenu" onClick={circleMenu.play}/>
        </div>
    );
}


export default Navbar;