"use strict"


//Virtual player selection
//Score variables

let playerName = prompt("Write your Name","");
let pS=0;
let cS=0;
let globalScore=0;
let tG=0;
const para1 = document.querySelector('.para1');
const para2 = document.querySelector('.para2');
const para3 = document.querySelector('.para3');
const para4 = document.querySelector('.para4');
const para5 = document.querySelector('.para5');
const para6 = document.querySelector('.para6');
const para7 = document.querySelector('.para7');
const para8 = document.querySelector('.para8');
const para9 = document.querySelector('.para9');
const para10 = document.querySelector('.para10');
const imgGen = document.querySelector('.imgGen');

let playerSelection;


//One round Function and Winner decision per round
function gameRound (humano){
    
    

    function randomNum (){
        return (Math.floor(Math.random()*3));
       }
       
       let computerSelection;
       
       function computerPlay (){
       let elements= ["rock","scissors","paper"];
       let random = randomNum ()
       computerSelection= elements[random];
       console.log(computerSelection);
       return(computerSelection);
       }
       computerSelection = computerPlay ()
       
       
   

   let nombre = ["rock", "paper", "scissors"];
   let playerSelection= nombre[humano]
   console.log(playerSelection);


    if ((playerSelection==="rock" && computerSelection==="rock") || 
        (playerSelection==="paper" && computerSelection==="paper") || 
        (playerSelection==="scissors" && computerSelection==="scissors")){
        globalScore = globalScore+1;
        tG= tG+1;

        if (playerSelection==="rock" || computerSelection==="rock"){
            imgGen.src="img/tierock.gif"; 
            para4.textContent=playerSelection.toUpperCase() + "  --VS--  " +computerSelection.toUpperCase();
            para5.textContent="===Tied Game===";
        }
        if (playerSelection==="paper" || computerSelection==="paper"){
            imgGen.src="img/tiepaper.gif"; 
            para4.textContent=playerSelection.toUpperCase() + "  --VS--  " +computerSelection.toUpperCase();
            para5.textContent="===Tied Game===";
        }
        if (playerSelection==="scissors" || computerSelection==="scissors"){
            imgGen.src="img/tiescissors.gif"; 
            para4.textContent=playerSelection.toUpperCase() + "  --VS--  " +computerSelection.toUpperCase();
            para5.textContent="===Tied Game===";
        }
    }
    else if ((playerSelection==="scissors" && computerSelection==="rock") || 
        (playerSelection==="rock" && computerSelection==="paper") || 
        (playerSelection==="paper" && computerSelection==="scissors")){
        globalScore = globalScore+1;
        cS = cS+1;

        if (playerSelection==="scissors" || computerSelection==="rock"){
            imgGen.src="img/dscissors.gif";
            para4.textContent= computerSelection.toUpperCase() + "  --VS--  " + playerSelection.toUpperCase() ;
            para5.textContent="===Virtual Player Win===";
            
        }   
        if (playerSelection==="rock"||computerSelection==="paper"){
            imgGen.src="img/drock.gif";
            para4.textContent= computerSelection.toUpperCase() + "  --VS--  " + playerSelection.toUpperCase() ;
            para5.textContent="===Virtual Player Win===";
            
        }
        if (playerSelection==="paper"|| computerSelection==="scissors"){
            imgGen.src="img/dpaper.gif";
            para4.textContent= computerSelection.toUpperCase() + "  --VS--  " + playerSelection.toUpperCase() ;
            para5.textContent="===Virtual Player Win===";
            
        }
         
    }
    else if ((playerSelection==="scissors" && computerSelection==="paper") || 
        (playerSelection==="rock" && computerSelection==="scissors") || 
        (playerSelection==="paper" && computerSelection==="rock")){
        globalScore = globalScore+1;
        pS = pS+1;

        if (playerSelection==="scissors" || computerSelection==="paper"){
            imgGen.src="img/dpaper.gif";
            para4.textContent= playerSelection.toUpperCase() + "  --VS--  " + computerSelection.toUpperCase() ;
            para5.textContent="==="+playerName +" Win===";
        }
        if (playerSelection==="rock" || computerSelection==="scissors"){
            imgGen.src="img/dscissors.gif";
            para4.textContent= playerSelection.toUpperCase() + "  --VS--  " + computerSelection.toUpperCase() ;
            para5.textContent="==="+playerName +" Win===";
        }
        if (playerSelection==="paper" || computerSelection==="rock"){
            imgGen.src="img/drock.gif";
            para4.textContent= playerSelection.toUpperCase() + "  --VS--  " + computerSelection.toUpperCase() ;
            para5.textContent="==="+playerName +" Win===";
        }
    }
    else{
        globalScore = globalScore+1;
        para1.textContent="Try again"
        
    }
    
    para1.textContent= playerName ;
    para2.textContent= "Virtual Player";
    para3.textContent= "Tied Games:" ;
    para8.textContent= pS ;
    para9.textContent= cS ;
    para10.textContent= tG ;
    

    


}

 


/*
if (playerSelection===computerSelection){
    globalScore = globalScore+1;
    tG= tG+1;
    */






   
/*
function gnb()
    {
        if (gameRound(humano)==="rock");
       var texto="<img src='img/drock.gif'  alt='Imagen' width='100px' />";
       document.writeln(texto);
    
    }
*/















/*
//Five round Function and Winner decision
function game() {
    for (let i = 0; i < 5; i++) {
    console.log("===Game No." +(1+i)+"==="); 
    gameRound ()
    }
    if (globalScore=5 && pS>cS){
        console.log("===Final Result=== Congratulations You Win the Game");
        console.log("===Final Score=== You: "+pS +"   Virtual player: " +cS)
    }
    else if (globalScore=5 && cS>pS){
        console.log("===Final Result=== Sorry Virtual player Win the Game");
        console.log("===Final Score=== You: "+pS +"   Virtual player: " +cS)
    }
    else{
        console.log("===Final Result=== Tied Game");
        console.log("===Final Score=== You: "+pS +"   Virtual player: " +cS)
    }
}
*/