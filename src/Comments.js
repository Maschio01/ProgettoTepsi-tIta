import axios from 'axios'
import * as MenuPopup from './MenuPopup.js'
import { currentObj } from './objectives.js';
import {renderComments} from './index.js'


function Comments(){
    return (
        <div>
            <h3>Commenti</h3>
            <hr/>
            <form action="#" method="post" onSubmit={(e)=>{e.preventDefault(); sendComment()}}>
                <img className="comments_image comments_mainImage" src="img/user1.png"/>
                <textarea id="text" placeholder="Facci sapere cosa ne pensi"></textarea>
                <input type="submit" value="Invia"/>
                <p id="invalidComment" style={{visibility:"visible"}}>sdads</p>
            </form>
            {loadComments()}
        </div>
    );
}

function sendComment(){
    let errorLabel = document.getElementById("invalidComment");
    if(MenuPopup.logged){
        let text = document.getElementById("text").value;
        if(text.replace("/\s/g", "") != ""){
            axios.post("http://istitutocorni.altervista.org/generalWebsite/progetti/MaschilePanini/serverSide/commentsHandler.php", {
                params:{
                    "action": "send",
                    "objective":currentObj,
                    "text": text,
                    "name": MenuPopup.userName
                }
            })
            .then(response => {
                renderComments(currentObj);
            })
            .catch(error => {
                console.log(error);
            });
        }   
        else{
            errorLabel.innerText = "Il commento è vuoto! Scrivi qualcosa";
            errorLabel.style.visibility = "visible";
        }
    }
    else{
        errorLabel.innerText = "Esegui l'accesso prima di commentare";
        errorLabel.style.visibility = "visible";
    }
}

function loadComments(){
    let comments=[];
    axios.post("http://istitutocorni.altervista.org/generalWebsite/progetti/MaschilePanini/serverSide/commentsHandler.php", {
        params:{
            "action": "get",
            "objective":currentObj
        }
    })
    .then(response => {
        
    })
    .catch(error => {
        console.log(error);
    });
    for(let i=0; i<3; i++){
        comments.push(
            <div className="comment">
                <img className="comments_image" src="img/user1.png"/>
                <p className="comments_name">ccs</p>
                <p className="comments_date">3/5/21</p>
                <p className="comments_text">dsaasd</p>
            </div>
        );
    }
    return comments;
}

class Comment{
    constructor(text, username, date){
        this.text = text;
        this.username = username;
        this.date = date;
    }
}



export default Comments;