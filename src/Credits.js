function Credits(){
    return (
        <div id="user_container">
            <div className="user_box">
                <h2>Profilo di Panini</h2>
                <div className="user_card">
                    <img src="img/Panno.png" alt="Panini" style={{width:"100%", height: "300px"}}/>
                    <h2>Simone Panini</h2>
                    <p className="title_user">Software Developer & Founder</p>
                    <p>Corni tecnico</p>
                    <a className="this_link" href="https://www.instagram.com/panno.__/"><i className="fa fa-instagram"></i></a>
                    <a className="this_link" href="#"><i className="fa fa-facebook"></i></a>
                    <button style={{marginTop: "15px"}}>Contact</button>
                </div>  
            </div>
    
            <div className="user_box">
                <h2>Profilo di Maschile</h2>
                <div className="user_card">
                    <img src="img/Maschio.jpg" alt="Maschile" style={{width:"100%", height: "300px"}}/>
                    <h2>Francesco Maschile</h2>
                    <p className="title_user">Software Developer & Founder</p>
                    <p>Corni tecnico</p>
                    <a className="this_link" href="https://www.instagram.com/_.maschio._/"><i className="fa fa-instagram"></i></a>
                    <a className="this_link" href="https://www.facebook.com/Maschio01/"><i className="fa fa-facebook"></i></a>
                    <button style={{marginTop: "15px"}}>Contact</button>
                </div>
            </div>
            
            <div className="user_box">
                <h2>Profilo di Pedrazzi</h2>
                <div className="user_card">
                    <img src="img/Pedra.png" alt="Pedrazzi" style={{width:"100%", height: "300px"}}/>
                    <h2>Lorenzo Pedrazzi</h2>
                    <p className="title_user">Software Developer & Founder</p>
                    <p>Corni tecnico</p>
                    <a className="this_link" href="https://www.instagram.com/pedrazzi.lorenzo/"><i className="fa fa-instagram"></i></a>
                    <a className="this_link" href="#"><i className="fa fa-facebook"></i></a>
                    <button style={{marginTop: "15px"}}>Contact</button>
                </div>  
            </div>
        </div>
    );
}

export default Credits;