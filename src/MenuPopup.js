export function Login(){
    return (
        <div class="menuPopup_container">
            <h2>Accedi</h2>
            <form >
                <p>Email Address:</p>
                <input type="text"/>
                <p>Password: </p>
                <input type="password"/>
                <input type="submit" value="Accedi"/>
            </form>
            
        </div>
    );
}

export function Signup(){
    return (
        <div class="menuPopup_container">
            <h2>Sing Up</h2>

            
        </div>
    );
}

export async function open(){

    for(var i=0;i<30;i++){
        menuPopup.style.top = ""+(-410 + i*20)+"px";
        await sleep(1);
        console.log(menuPopup);
    }

}

export function close(s){
    while(true){
        console.log(s);
        

    }

}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var menuPopup = document.getElementById("menuPopup");