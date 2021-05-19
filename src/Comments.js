import axios from 'axios'
import * as MenuPopup from './MenuPopup.js'

function Comments(){
    return (
        <div>
            <h3>Commenti</h3>
            <hr/>
            <form action="#" method="post" onSubmit={(e)=>{e.preventDefault(); sendComment()}}>
                <img className="comments_image comments_mainImage" src="img/user1.png"/>
                <textarea id="text" placeholder="Facci sapere cosa ne pensi"></textarea>
                <input type="submit" value="Invia"/>
            </form>
            {loadComments()}
        </div>
    );
}

function sendComment(){
    if(MenuPopup.logged){
        let text = document.getElementById("text").value;
        if(text.replace("/\s/g", "") != ""){
            axios.post("http://istitutocorni.altervista.org/commentsHandler.php", {
                params:{
                    "action": "send",
                    "text": text,
                    "name": MenuPopup.userName
                }
            })
        }   
        else{

        }
    }
    else{

    }
}

function loadComments(){
    
    let comments=[];
    for(let i=0; i<10; i++){
        comments.push(
            <div className="comment">
                <img className="comments_image" src="img/user1.png"/>
                <p className="comments_name"></p>
                <p className="comments_date"></p>
                <p className="comments_text"></p>
            </div>
        );
    }
}

class Comment{
    constructor(text, username, date){
        this.text = text;
        this.username = username;
        this.date = date;
    }
}



export default Comments;