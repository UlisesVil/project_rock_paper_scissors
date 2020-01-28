"use strict"


//Virtual player selection
function randomNum (){
 return (Math.floor(Math.random()*3));
}

let computerSelection;

function computerPlay (){
let elements= ["rock","scissors","paper"];
let random = randomNum ()
computerSelection= elements[random];
return(computerSelection);
}

computerSelection = computerPlay ()

//Score variables
let pS=0;
let cS=0;
let globalScore=0;
let tG=0;

//One round Function and Winner decision per round
function gameRound (){
    let playerString= prompt("Write Rock, Paper or Scissors to Play","");
    let playerSelection= playerString.toLowerCase();
    
    if (playerSelection==computerSelection){
        globalScore = globalScore+1;
        tG= tG+1;
        console.log("Tied Game");
    }
    else if ((playerSelection==="scissors" && computerSelection==="rock") || 
        (playerSelection==="rock" && computerSelection==="paper") || 
        (playerSelection==="paper" && computerSelection==="scissors")){
            globalScore = globalScore+1;
            cS = cS+1;
        console.log("   "+computerSelection + "  beats  " + playerSelection );
        console.log("   "+"You select: " +playerSelection +"  Virtual Player Select: " + computerSelection +"  Then ---Virtual Player Win---");
    }
    else if ((playerSelection==="scissors" && computerSelection==="paper") || 
        (playerSelection==="rock" && computerSelection==="scissors") || 
        (playerSelection==="paper" && computerSelection==="rock")){
        globalScore = globalScore+1;
        pS = pS+1;
        console.log("   "+playerSelection + "  beats  " + computerSelection );
        console.log("   "+"You select: " +playerSelection +"  Virtual Player Select: " + computerSelection +"  Congratulations ---You Win---");   
    }
    else{
        globalScore = globalScore+1;
        console.log("Try again");
        
    }
    console.log("   "+"-Score " +" You: "+pS +"  Virtual Player: "+cS+ "   Tied Game: " +tG +"-");
}

//Five round Function and Winner decision
function game() {
    for (let i = 0; i < 5; i++) {
    console.log("***Game No." +(1+i)+"***"); 
    gameRound ()
    }
    if (globalScore=5 && pS>cS){
        console.log("***Final Result*** Congratulations You Win the Game");
        console.log("***Final Score*** You: "+pS +"   Virtual player: " +cS)
    }
    else if (globalScore=5 && cS>pS){
        console.log("***Final Result*** Sorry Virtual player Win the Game");
        console.log("***Final Score*** You: "+pS +"   Virtual player: " +cS)
    }
    else{
        console.log("***Final Result*** Tied Game");
        console.log("***Final Score*** You: "+pS +"   Virtual player: " +cS)
    }
}

  game ()