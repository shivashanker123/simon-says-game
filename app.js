let gameSeq = [];
let userSeq = [];
let arrayColor=["yellow","green","purple","red"];

let started = false;
let level = 0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",(event)=>{
    if(started==false){
        console.log("game started");
        started=true;
        levelUp();

    }
})

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout( ()=>{
        btn.classList.remove("flash");
    },200);    
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout( ()=>{
        btn.classList.remove("userflash");
    },200);    
}


function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`

    let randNum = Math.floor(Math.random() * 4);
    let randColor = arrayColor[randNum];
    let randbtn = document.querySelector(`.${randColor}`);
    gameflash(randbtn);
    gameSeq.push(randColor);
    console.log(gameSeq)
}

function gamecheck(idx){
    if(gameSeq[idx]==userSeq[idx]){
        if(gameSeq.length==userSeq.length){
            console.log(userSeq);
            setTimeout(levelUp,1000);
        }
        
    }
    else{
        console.log("Game over!");
        h2.innerText=`Your score : ${level-1} \n Game over! Press any key to start!`
        gamereset();
    }
}

function btnPress(){
    let btn = this;
    userflash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    
    gamecheck(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");

for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function gamereset(){
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;
}