export function Login(){
    return (
        <div className="menuPopup_container">
            <h2>Accedi</h2>
            <form action="" method="get" onSubmit={(e)=>{let res = submitCheck("login"); if(!res){e.preventDefault();}}}>
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
            <a>&times;</a><h2>Registrati</h2>
            <form action="http://istitutocorni.altervista.org/login.php" method="get" onSubmit={(e)=>{let res = submitCheck("signup"); if(!res){e.preventDefault();}}}>
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

export async function open(){

    for(var i=0;i<30;i++){
        menuPopup.style.top = ""+(-410 + i*20)+"px";
        await sleep(10);
        console.log(menuPopup);
    }

}

export function close(s){

    while(true) {
        console.log();
    }
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

var menuPopup = document.getElementById("menuPopup");
