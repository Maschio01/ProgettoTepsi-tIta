function Navbar(){
    return (
        <div>
            <div className="navbar">
                <p className="navbarLink"><a href="contacts.html">Contattaci</a></p>
                <p className="navbarLink"><a href="a2030.html">Agenda 2030</a></p>
                <p className="navbarLink"><a href="news.html">Notizie</a></p>
                <p className="navbarLink"><a href="index.html">Menu</a></p>
            </div>
            <input type="button" value="Suggerimenti" id="buttonPlay" className="BTNstartMenu" onclick="play()"/>
        </div>
    );
}

export default Navbar;