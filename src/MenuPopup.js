export function Login(){
    return (
        <div style={{width:"100%", height:"100% "}}>
            <h2>Log In</h2>
            
            
        </div>
    );
}

export function Signup(){
    return (
        <div style={{width:"100%", height:"100% "}}>
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