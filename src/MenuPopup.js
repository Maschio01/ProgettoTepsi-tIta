import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
var menuPopup = document.getElementById("menuPopup");
var timer = 2;
var velocity = 20;
export const STATE_CLOSE=0;
export const STATE_OPEN=1;
export const STATE_TRANSIT=2;
export var state = STATE_CLOSE; 


export function Login(){

    return (
        <div className="menuPopup_container">
            <a href="#" onClick={close}>&times;</a>
            <h2>Accedi</h2>
            <form action="#" method="get" onSubmit={(e)=>{e.preventDefault();submit("login")}}>
                <p>Email Address:</p>
                <input id="email" name="email" type="text"/>
                <p>Password: </p>
                <input id="pass" name="pass" type="password"/>
                <input type="submit" value="Accedi"/>
            </form>
            <p id="invalidInput">Completare tutti i campi</p>
        </div>
    );
}

export function Signup(){
    return (
        <div className="menuPopup_container">
            <a href="#" onClick={close}>&times;</a>
            <h2>Registrati</h2>
            <form action="#" method="get" onSubmit={(e)=>{e.preventDefault();submit("singup")}}>
                <p>Email Address:</p>
                <input id="email" name="email" type="text"/>
                <p>Nome: </p>
                <input id="name" name="name" type="text"/>
                <p>Password: </p>
                <input id="pass" name="pass" type="password"/>
                <p>Riscrivi Password: </p>
                <input id="passRep" type="password"/>
                <input type="submit" value="Registrati"/>
            </form>
            <p id="invalidInput"></p>
        </div>
    );
}

function submit(type){
    if(submitCheck(type)){
        let formData = new FormData();
        formData.append('name', "simone");
        formData.append('surname', "panini");

        axios.get("http://istitutocorni.altervista.org/index.php", {
            params : {
                bob:"michaimoaodoa"
            },
            headers: {
                'Access-Control-Allow-Origin': '*',
                crossorigin: true,
                
            }
        })
        .then(response => {
            if (response.data.message) {
              console.log(`Got ${Object.entries(response.data.message).length} breeds`);
            }
        })
        .catch(error => {
            console.log(error);
        });


        /*
        axios({
            method: 'post',
            url: 'http://istitutocorni.altervista.org/login.php',
            data: formData,
            config: { headers: {'Content-Type': 'application/json' }}
        })
        .then((response) => {
            //handle success
            console.log("then: " + response);

        })
        .catch((response) => {
            //handle error
            console.log("catch: " + response);
        });*/
    } 
}

export async function open(){
    state=STATE_TRANSIT;
    menuPopup.style.top = (-menuPopup.clientHeight-10).toString()+"px";
    menuPopup.style.visibility = "visible";
    while(menuPopup.offsetTop<100){
        menuPopup.style.top = (menuPopup.offsetTop+velocity).toString() + "px";
        await sleep(timer);
    }
    state=STATE_OPEN
}

export async function close(){
    state=STATE_TRANSIT;
    while(menuPopup.offsetTop>(-menuPopup.clientHeight-10)){
        menuPopup.style.top = (menuPopup.offsetTop-velocity).toString() + "px";
        await sleep(timer);
    }
    menuPopup.style.visibility = "hidden";
    state=STATE_CLOSE
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function submitCheck(type){
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");
    let errorLabel = document.getElementById("invalidInput");
    if(type=="login"){
        if(email.value=="" || pass.value==""){
            errorLabel.innerText = "Completare tutti i campi";
            errorLabel.style.visibility="visible";
            return false;
        }
    }
    else if(type=="signup"){
        let passRep = document.getElementById("passRep");
        let name = document.getElementById("name");
        if(email.value=="" || name.value=="" || pass.value=="" || passRep.value==""){
            errorLabel.innerText = "Completare tutti i campi";
            errorLabel.style.visibility="visible";
            return false;
        }
        else if(pass.value!=passRep.value){
            errorLabel.innerText = "Hai sbagliato a riscrivere la password";
            errorLabel.style.visibility="visible";
            return false;
        }
    }
    errorLabel.style.visibility="hidden";
    return true;
}

