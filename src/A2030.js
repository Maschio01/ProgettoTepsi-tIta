import {a2030Selection} from './index';
import {objectives} from './objectives';


function A2030(){
    var list = [];
    for(let i = 0; i< objectives.length;i++){
        var src = "img/problemIcon"+(i+1)+".jpg";
        
        list.push(
            <div key={i} className="card cardList" >
                <a href="#" onClick={()=>a2030Selection(i)}><img src={src} alt="Obbiettivi"/></a>
                <p>{objectives[i].title}</p>
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

