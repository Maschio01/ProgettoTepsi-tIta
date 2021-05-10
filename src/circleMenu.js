var buttons = [];
var main;
var body;
var content;
var mainWidth;
var mainHeight;
var menuOpen = false;
var edendeAnimMenu = true;
var numImage = 1;
var urls = [
    "https://www.flowe.com/",
    "https://www.treedom.net/it/plant-a-tree?gclid=Cj0KCQjw9YWDBhDyARIsADt6sGaeQUtn6ty9lxYLTB0HttgCDTofSMWyMYIwqxKtAU6rP7vN9Q5pdOEaAkRdEALw_wcB",
    "https://ecofactory.eu/",
    "https://zeroco2.eco/it/shop/?gclid=Cj0KCQjw9YWDBhDyARIsADt6sGYoKmYj0C13kQhgQBiZuTuYxKOGuAvRH0_eiOC5DsXdQ9pBda2ym08aAg4nEALw_wcB",
    "https://unric.org/it/agenda-2030/",
    "https://sostieni.wwf.it/adotta-un-panda.html?gclid=Cj0KCQjw9YWDBhDyARIsADt6sGYR4B9sqwL1nw6EkNpE-_decfAhzL0VCjut1bvIH9PCOj0zVGc1w4UaAtEQEALw_wcB",
    "https://sostieni.wwf.it/adotta-un-koala.html",
    "https://www.legambiente.it/tartalove/?gclid=Cj0KCQjw9YWDBhDyARIsADt6sGb77Sm1okZTtCHyCKDIrmsyZGmV01FDsd-RYy7UlL6nXZIgApcABisaArQ8EALw_wcB"
];

function openLink(index){
    window.location.href=urls[index];
}

export function initialize() {
    main = document.getElementById("root");
    body = document.getElementById("body");
    content = document.getElementById("content");
    if(content==null) content = document.getElementById("user_container")
    mainWidth = Math.max(body.scrollWidth, body.offsetWidth, document.documentElement.clientWidth, document.documentElement.scrollWidth, document.documentElement.offsetWidth);
    mainHeight = Math.max(body.scrollHeight, body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    for (let i = 0; i < 8; i++) {
        let button = document.createElement("input");
        button.className = "BTNmenu";
        button.style.visibility = "hidden";
        button.style.zIndex = "1000";
        button.type = 'button';
        button.id = 'button' + i;
        button.addEventListener("click", function(){
            openLink(i);
        });
        main.appendChild(button);
        button.style.backgroundImage = "url('img/sugg" + i + ".png')";
        button.style.backgroundSize = '100%';
        buttons.push(document.getElementById("button" + i));
    
    }


}


function fadeInFunc(variabile) {
    let el = document.getElementById(variabile);
    el.style.opacity = 0;
    let tick = function() {
        el.style.opacity = +el.style.opacity + 0.01;
        if (+el.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
        }
    };
    tick();
}

export async function play() {
    initialize();

    if (!menuOpen && edendeAnimMenu) {

        menuOpen = true
        edendeAnimMenu = false;
        for (var i = 0; i < 8; i++) {
            content.style.filter = "blur(" + i + "px)";
            buttons[i].style.left = (mainWidth / 2) - 50 + ((Math.sin(Math.PI / 4 + Math.PI / 4 * i) * 170)) + 'px';
            buttons[i].style.top = 400 + ((Math.cos(Math.PI / 4 + Math.PI / 4 * i) * 170)) + 'px';
            buttons[i].style.visibility = 'visible';
            fadeInFunc("button" + i);
            await sleep(50);
        }
        await sleep(100);
        edendeAnimMenu = true;
    } else
        stop();

}

async function fadeOutFunc(variabile) {
    let el = document.getElementById(variabile);
    let tick = function() {
        el.style.opacity = +el.style.opacity - 0.05;
        if (+el.style.opacity > 0) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
        }
    };
    tick();
}

async function stop() {
    if (edendeAnimMenu) {
        menuOpen = false;
        edendeAnimMenu = false;
        for (var i = 0; i < 8; i++) {
            await fadeOutFunc("button" + i);
            await sleep(50);
            content.style.filter = "blur(" + (7 - i) + "px)";
        }
        for (var i = 0; i < 8; i++) {
            buttons[i].style.visibility = 'hidden';
        }
        await sleep(300);
        edendeAnimMenu = true;
    }

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

