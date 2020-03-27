"use strict"


    

//Virtual player selection
//Score variables

let playerName;
let pS=0;
let cS=0;
let globalScore=0;
let tG=0;
const para1 = document.querySelector('.para1');
const para2 = document.querySelector('.para2');
const para3 = document.querySelector('.para3');
const para4 = document.querySelector('.para4');
const para5 = document.querySelector('.para5');
const para8 = document.querySelector('.para8');
const para9 = document.querySelector('.para9');
const para10 = document.querySelector('.para10');
const imgGen = document.querySelector('.imgGen');
const imgGen2 = document.querySelector('.imgGen2');
const imgGen3 = document.querySelector('.imgGen3');
let playerSelection;
textname

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
            para5.textContent=">>>Tied Game<<<";
        }
        if (playerSelection==="paper" || computerSelection==="paper"){
            imgGen.src="img/tiepaper.gif"; 
            para4.textContent=playerSelection.toUpperCase() + "  --VS--  " +computerSelection.toUpperCase();
            para5.textContent=">>>Tied Game<<<";
        }
        if (playerSelection==="scissors" || computerSelection==="scissors"){
            imgGen.src="img/tiescissors.gif"; 
            para4.textContent=playerSelection.toUpperCase() + "  --VS--  " +computerSelection.toUpperCase();
            para5.textContent=">>>Tied Game<<<";
        }
    }
    else if ((playerSelection==="scissors" && computerSelection==="rock") || 
        (playerSelection==="rock" && computerSelection==="paper") || 
        (playerSelection==="paper" && computerSelection==="scissors")){
        globalScore = globalScore+1;
        cS = cS+1;

        if (playerSelection==="scissors" || computerSelection==="rock"){
            imgGen.src="img/dscissors.gif";
            para4.textContent= playerSelection.toUpperCase() + "  --VS--  " + computerSelection.toUpperCase() ;
            para5.textContent=">>>Virtual Player Win<<<";
            
        }   
        if (playerSelection==="rock"||computerSelection==="paper"){
            imgGen.src="img/drock.gif";
            para4.textContent= playerSelection.toUpperCase() + "  --VS--  " + computerSelection.toUpperCase() ;
            para5.textContent=">>>Virtual Player Win<<<";
            
        }
        if (playerSelection==="paper"|| computerSelection==="scissors"){
            imgGen.src="img/dpaper.gif";
            para4.textContent= playerSelection.toUpperCase() + "  --VS--  " + computerSelection.toUpperCase() ;
            para5.textContent=">>>Virtual Player Win<<<";
            
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
            para5.textContent=">>>"+playerName +" Win<<<";
                

        }
        if (playerSelection==="rock" || computerSelection==="scissors"){
            imgGen.src="img/dscissors.gif";
            para4.textContent= playerSelection.toUpperCase() + "  --VS--  " + computerSelection.toUpperCase() ;
            para5.textContent=">>>"+playerName +" Win<<<";
        }
        if (playerSelection==="paper" || computerSelection==="rock"){
            imgGen.src="img/drock.gif";
            para4.textContent= playerSelection.toUpperCase() + "  --VS--  " + computerSelection.toUpperCase() ;
            para5.textContent=">>>"+playerName +" Win<<<";
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
    

    if(pS==5||cS==5){

        let generalDiv= document.querySelector("#general");
        let divwin= document.querySelector("#win");
        let divlose= document.querySelector("#lose");
        
        if(pS==5){
            generalDiv.style.display="none";
            divwin.style.display=""
            document.getElementById('winsound').play();
            document.getElementById('gamestart').pause();
                
        }
        if(cS==5){
            generalDiv.style.display="none";
            divlose.style.display=""
            document.getElementById('losesound').play();
            document.getElementById('gamestart').pause();


        }
    }
    

    if(playerSelection==="scissors"){
    imgGen2.src="img/scissors.gif";
    }
    if(playerSelection==="rock"){
    imgGen2.src="img/rock.gif";
    }
    if(playerSelection==="paper"){
    imgGen2.src="img/paper.gif";
    }

    if(computerSelection==="scissors"){
    imgGen3.src="img/scissors.gif";
    }
    if(computerSelection==="rock"){
    imgGen3.src="img/rock.gif";
    }
    if(computerSelection==="paper"){
    imgGen3.src="img/paper.gif";
    }



    let boton1= document.querySelector("#boton1");
    let boton2= document.querySelector("#boton2");
    let divwin= document.querySelector("#win");
    let divbye= document.querySelector("#bye");
    let divlose= document.querySelector("#lose");

    boton1.addEventListener("click",function(){
        divwin.style.display="none";
        generalDiv.style.display="";
        pS=0;
        cS=0;
        globalScore=0;
        tG=0;
        para8.textContent= pS ;
        para9.textContent= cS ;
        para10.textContent= tG ;
        document.getElementById('gamestart').play();
        document.getElementById('winsound').pause();
    });

    boton2.addEventListener("click",function(){
        divwin.style.display="none";
        divbye.style.display="";
        document.getElementById('byesound').play();
        document.getElementById('winsound').pause();
    });


    let boton3= document.querySelector("#boton3");
    let boton4= document.querySelector("#boton4");

    boton3.addEventListener("click",function(){
        divlose.style.display="none";
        generalDiv.style.display="";
        pS=0;
        cS=0;
        globalScore=0;
        tG=0;
        para8.textContent= pS ;
        para9.textContent= cS ;
        para10.textContent= tG ;
        document.getElementById('gamestart').play();
        document.getElementById('losesound').pause();
    });

    boton4.addEventListener("click",function(){
        divlose.style.display="none";
        divbye.style.display="";
        document.getElementById('byesound').play();
        document.getElementById('losesound').pause();
    });

    let boton5= document.querySelector("#boton5");

    boton5.addEventListener("click",function(){
        location.reload();
        return false;
    });

}
   
   
let divgeneralLogin;
let botonStart= document.querySelector("#botonstart");
let divstart= document.querySelector("#start");
let generalDiv = document.querySelector("#general");
    
botonStart.addEventListener("click", function(){
    divstart.style.display="none";
    divgeneralLogin.style.display="";
    document.getElementById('playername').play();
});


let botonlogin= document.querySelector("#botonlogin");
divgeneralLogin= document.querySelector("#generalLogin");
    
botonlogin.addEventListener("click", function(){
    divgeneralLogin.style.display="none";
    generalDiv.style.display="";
    playerName=document.querySelector("#textname").value;
    document.getElementById('gamestart').play();
    document.getElementById('playername').pause()
});


let imgbye = document.getElementById("imgbye");
let src = imgbye.getAttribute("src");
    console.log(src);

imgbye.addEventListener("click", function(){
    imgbye.setAttribute("src",src);
});


let up1 = document.querySelector("#up1");
up1.addEventListener("click", function(){
    console.log("has dado click");
    document.getElementById('playername').volume+=0.1;
    document.getElementById('gamestart').volume+=0.1;
    document.getElementById('winsound').volume+=0.1;
    document.getElementById('losesound').volume+=0.1;
    document.getElementById('byesound').volume+=0.1;
});


let down = document.querySelector("#down");
down.addEventListener("click", function(){
    console.log("has dado click");
    document.getElementById('playername').volume-=0.1;
    document.getElementById('gamestart').volume-=0.1;
    document.getElementById('winsound').volume-=0.1;
    document.getElementById('losesound').volume-=0.1;
    document.getElementById('byesound').volume-=0.1;
});


let up2 = document.querySelector("#up2");
console.log(up2);

up2.addEventListener("click", function(){
    console.log("has dado click");
    document.getElementById('playername').volume+=0.1;
    document.getElementById('gamestart').volume+=0.1;
    document.getElementById('winsound').volume+=0.1;
    document.getElementById('losesound').volume+=0.1;
    document.getElementById('byesound').volume+=0.1;
});


let down2 = document.querySelector("#down2");

down2.addEventListener("click", function(){
    console.log("has dado click");
    document.getElementById('playername').volume-=0.1;
    document.getElementById('gamestart').volume-=0.1;
    document.getElementById('winsound').volume-=0.1;
    document.getElementById('losesound').volume-=0.1;
    document.getElementById('byesound').volume-=0.1;
});

let botoncomienzo= document.querySelector("#comienzo");
let divportada= document.querySelector("#portada");

    
botoncomienzo.addEventListener("click", function(){
    divstart.style.display="";
    divportada.style.display="none";
    
});