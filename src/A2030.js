import {objectives, a2030Selection} from './index';

function A2030(){
    /*
    return (
        <div id="content">
            <div className="card cardList" >
                <a href="Povertà.html"><img src="img/problemIcon1.jpg" alt="Povertà"/></a>
                <p>Povertà</p>
            </div>
            <div className="card cardList" >
                <a href="SconfiggereLaFame.html"><img src="img/problemIcon2.jpg" alt="Fame"/></a>
                <p>Fame</p>
            </div>
            <div className="card cardList" >
                <a href="SaluteBenessere.html"><img src="img/problemIcon3.jpg" alt="Salute"/></a>
                <p>Salute</p>
            </div>
            <div className="card cardList" >
                <a href="IstruzioneQualità.html"><img src="img/problemIcon4.jpg" alt="Istruzione"/></a>
                <p>Istruzione</p>
            </div>
            <div className="card cardList" >
                <a href="ParitaGeneri.html"><img src="img/problemIcon5.jpg" alt="Parità"/></a>
                <p>Parità</p>
            </div>
            <div className="card cardList" >
                <a href="AcquaPulita.html"><img src="img/problemIcon6.jpg" alt="Sanità"/></a>
                <p>Sanità</p>
            </div>
            <div className="card cardList" >
                <a href="EnergiaPulita.html"><img src="img/problemIcon7.jpg" alt="Energia"/></a>
                <p>Energia</p>
            </div>
            <div className="card cardList" >
                <a href="Economia.html"><img src="img/problemIcon8.jpg" alt="Economia"/></a>
                <p>Economia</p>
            </div>
            <div className="card cardList" >
                <a href="Infrastrutture.html"><img src="img/problemIcon9.jpg" alt="Imprese"/></a>
                <p>Imprese</p>
            </div>
            <div className="card cardList" >
                <a href="RidurreDisuguaglianze.html"><img src="img/problemIcon10.jpg" alt="Disuguaglianze"/></a>
                <p>Disuguaglianze</p>
            </div>
            <div className="card cardList" >
                <a href="CittaSostenibili.html"><img src="img/problemIcon11.jpg" alt="Città"/></a>
                <p>Città</p>
            </div>
            <div className="card cardList" >
                <a href="ConsumoProduzione.html"><img src="img/problemIcon12.jpg" alt="Prodotti"/></a>
                <p>Prodotti</p>
            </div>
            <div className="card cardList" >
                <a href="CambiamentoClimatico.html"><img src="img/problemIcon13.jpg" alt="Clima"/></a>
                <p>Clima</p>
            </div>
            <div className="card cardList" >
                <a href="LaVitaMarina.html"><img src="img/problemIcon14.jpg" alt="Mare"/></a>
                <p>Mare</p>
            </div>
            <div className="card cardList" >
                <a href="VitaSullaTerra.html"><img src="img/problemIcon15.jpg" alt="Terra"/></a>
                <p>Terra</p>
            </div>
            <div className="card cardList" >
                <a href="PaceGiustizia.html"><img src="img/problemIcon16.jpg" alt="Pace"/></a>
                <p>Pace</p>
            </div>
            <div className="card cardList" >
                <a href="Partnership.html"><img src="img/problemIcon17.jpg" alt="Obbiettivi"/></a>
                <p>Obbiettivi</p>
            </div>
            <div style={{clear:"both"}}></div>
        </div>
    );*/
    var list = [];
    for(let i = 0; i< objectives.length;i++){
        var src = "img/problemIcon"+(i+1)+".jpg";
        
        list.push(
            <div key={i} className="card cardList" >
                <a href="#" onClick={()=>a2030Selection(i)}><img src={src} alt="Obbiettivi"/></a>
                <p>Obbiettivi</p>
            </div>
        );
    }

    return (
        <div id="content">
            {list}
            <div style={{clear:"both"}}></div>
        </div>
    );
}



export default A2030;

