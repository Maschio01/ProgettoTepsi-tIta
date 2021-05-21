import axios from 'axios'
import * as MenuPopup from './MenuPopup.js'
import { currentObj } from './objectives.js';
import {renderComments} from './index.js'

var comments = [];

export function Comments(){
    return (
        <div>
            <h3>Commenti</h3>
            <hr/>
            <form action="#" method="post" onSubmit={(e)=>{e.preventDefault(); sendComment()}}>
                <img className="comments_image comments_mainImage" src="img/user1.png"/>
                <textarea id="text" placeholder="Facci sapere cosa ne pensi"></textarea>
                <input type="submit" value="Invia"/>
                <p id="invalidComment">sdads</p>
            </form>
            {comments}
        </div>
    );
}

function sendComment(){
    let errorLabel = document.getElementById("invalidComment");
    if(MenuPopup.logged){
        let text = document.getElementById("text").value;
        if(text.replace("/\s/g", "") != ""){
            errorLabel.style.visibility = "hidden";
            axios.post("http://istitutocorni.altervista.org/generalWebsite/progetti/MaschilePanini/serverSide/commentsHandler.php", {
                params:{
                    "action": "send",
                    "objective":currentObj,
                    "text": text,
                    "name": MenuPopup.userName
                }
            })
            .then(response => {
                loadComments();
	            setTimeout(()=>{renderComments(currentObj);}, 1000);
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

export function loadComments(){
    axios.post("http://istitutocorni.altervista.org/generalWebsite/progetti/MaschilePanini/serverSide/commentsHandler.php", {
        params:{
            "action": "get",
            "objective":currentObj
        }
    })
    .then(response => {
        console.log(response);
        comments = [];
        for(let i=0; response.data != null && i<response.data.size; i++) {
            comments.push(
                <div className="comment">
                    <img className="comments_image" src="img/user1.png"/>
                    <p className="comments_name">{response.data[i].name}</p>
                    <p className="comments_date">{response.data[i].date}</p>
                    <p className="comments_text">{response.data[i].text}</p>
                </div>
            );
        }
    })
    .catch(error => {
        console.log(error);
    });
}

class Comment{
    constructor(text, username, date){
        this.text = text;
        this.username = username;
        this.date = date;
    }
}



