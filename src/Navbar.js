import {menuSelection} from './index';

function Navbar(){
    return (
        <div>
            <div className="navbar">
                <p className="navbarLink"><a href="#" >Contattaci</a></p>
                <p className="navbarLink"><a href="#" >Agenda 2030</a></p>
                <p className="navbarLink"><a href="#" >Notizie</a></p>
                <p className="navbarLink"><a href="#" onClick={porc()}>Menu</a></p>
            </div>
            <input type="button" value="Suggerimenti" id="buttonPlay" className="BTNstartMenu" onclick="play()"/>
        </div>
    );
}

function porc(){
    alert("fd");
}

export default Navbar;