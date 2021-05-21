import React from 'react';
import {renderMenuPopup} from './index.js'
import axios from 'axios'
var menuPopup = document.getElementById("menuPopup");
var timer = 2;
var velocity = 20;
export const STATE_CLOSE=0;
export const STATE_OPEN=1;
export const STATE_TRANSIT=2;
export var state = STATE_CLOSE;
export var logged = false;
export var userName = "";
export var userEmail = "";



export function Login(){
    return (
        <div className="menuPopup_container">
            <a className="closed" href="#" onClick={close}>&times;</a>
            <h2>Accedi</h2>
            <form action="#" method="post" onSubmit={(e)=>{e.preventDefault();submit("login")}}>
                <p>Email Address:</p>
                <input id="email" name="email" type="text"/>
                <p>Password: </p>
                <input id="pass" name="pass" type="password"/>
                <input type="submit" value="Accedi"/>
            </form>
            <a className="changeMenu" href="#" onClick={()=>renderMenuPopup(Signup())}>Prima volta qui? Registrati</a>
            <p id="invalidInput">Completare tutti i campi</p>
        </div>
    );
}

export function Signup(){
    return (
        <div className="menuPopup_container">
            <a className="closed" href="#" onClick={close}>&times;</a>
            <h2>Registrati</h2>
            <form action="#" method="post" onSubmit={(e)=>{e.preventDefault();submit("signup")}}>
                <p>Email Address:</p>
                <input id="email" name="email" type="text"/>
                <p>Nome: </p>
                <input id="name" name="name" type="text" />
                <p>Password: </p>
                <input id="pass" name="pass" type="password"/>
                <p>Riscrivi Password: </p>
                <input id="passRep" type="password"/>
                <input type="submit" value="Registrati"/>
            </form>
            <a className="changeMenu" href="#" onClick={()=>renderMenuPopup(Login())}>Già registrato? Fai l'accesso</a>
            <p id="invalidInput"></p>
        </div>
    );
}

export function LoginSuccessfully(name){

    return (
        <div className="menuPopup_container">
            <a className="closed" href="#" onClick={close}>&times;</a>
            <h2>Accedi</h2>
            <a className="changeMenu" href="#" onClick={()=>renderMenuPopup(Signup())}>Registrati</a>
            <p>Benvenuto/a {name} hai eseguito l'accesso!<br/>Presto arriveranno altre funzionalità...</p>
            
        </div>
    );
}

export function SignupSuccessfully(){
    return (
        <div className="menuPopup_container">
            <a className="closed" href="#" onClick={close}>&times;</a>
            <h2>Registrati</h2>
            <a className="changeMenu" href="#" onClick={()=>renderMenuPopup(Login())}>Fai l'accesso</a>
            <p>Registrato correttamente!<br/>Esegui l'accesso per entrare nell'account</p>
        </div>
    );
}

function submit(type){
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    if(submitCheck(type)){

        if(type == "signup"){
            let name = document.getElementById("name");

            axios.post("http://istitutocorni.altervista.org/generalWebsite/progetti/MaschilePanini/serverSide/signup.php", {
                params : {
                    "name": name.value,
                    "email": email.value,
                    "pass": pass.value
                }
            })
            .then(response => {
                if(response.data.registered){
                    renderMenuPopup(SignupSuccessfully());
                }
                else{
                    let errorLabel = document.getElementById("invalidInput");
                    errorLabel.innerText = "Errore nella registrazione";
                    errorLabel.style.visibility="visible";
                }
            })
            .catch(error => {
                console.log(error);
            });
        }else if(type == "login"){
            axios.post("http://istitutocorni.altervista.org/generalWebsite/progetti/MaschilePanini/serverSide/login.php", {
                params : {
                    "email": email.value,
                    "pass": pass.value
                }
            })
            .then(response => {
                if(response.data.logged){
                    logged = true;
                    userName = response.data.name;
                    userEmail = response.data.email;
                    renderMenuPopup(LoginSuccessfully(response.data.name));
                }
                else{
                    let errorLabel = document.getElementById("invalidInput");
                    errorLabel.innerText = "Email o password invalide";
                    errorLabel.style.visibility="visible";
                }

            })
            .catch(error => {
                console.log(error);
            });
        }
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
        if(!(checkInput(email.value) && checkInput(pass.value))){
            errorLabel.innerText = "Completare tutti i campi e non usare caratteri speciali";
            errorLabel.style.visibility="visible";
            return false;
        }
    }
    else if(type=="signup"){
        let passRep = document.getElementById("passRep");
        let name = document.getElementById("name");
        if(!(checkInput(email.value) && checkInput(name.value) && checkInput(pass.value) && checkInput(passRep.value))){
            errorLabel.innerText = "Completare tutti i campi e non usare caratteri speciali";
            errorLabel.style.visibility="visible";
            return false;
        }else if(!email.contains("@")){
            errorLabel.innerText = "Non è una mail completa!";
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

function checkInput(str){
    return (!(str=="" || str.includes(" ") || str.includes(",") || str.includes("[") || str.includes("]")));
}