let userScore=0;
let compScore=0;
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msgboard");
let uscore=document.querySelector("#user-score");
let coScore=document.querySelector('#Comp');

let genrateCompChoice =()=>{
    const options =['paper','rock','scissors'];
   let indexNo= Math.floor(Math.random()*3);
   return options[indexNo];
   
}
let drawGame =()=>
{
 
 
 msg.classList.remove("text-warning","bg-warning","border-warning");
 msg.classList.remove("text-info","bg-info","border-info");
 msg.classList.remove("text-success","bg-success","border-succes");
 msg.innerText ='Game was Draw 😐';
 msg.classList.add("text-danger","bg-danger","border-danger");
}
let gameResult=(userWin,compChoice,userchoice)=>{
    if (userWin) {
    
 msg.classList.remove("text-warning","bg-warning","border-warning");
 msg.classList.remove("text-info","bg-info","border-info");
 msg.classList.remove("text-danger","bg-danger","border-danger");
 msg.classList.add("text-success","bg-success","border-succes");
 ++userScore;
 uscore.innerText=userScore;   
msg.innerText =`you beats comp ${compChoice} 🤩`;
 
    }else{
        
 msg.classList.remove("text-warning","bg-warning","border-warning");
 msg.classList.remove("text-success","bg-success","border-succes");
 msg.classList.remove("text-danger","bg-danger","border-danger");
 ++compScore;
        coScore.innerText=compScore;
        
 msg.innerText =`comp beats your ${userchoice} 😕`;
 msg.classList.add("text-info","bg-info","border-info");

    }
}

let playGame=(userchoice)=>{
    
    const compChoice=genrateCompChoice();
  if (userchoice == compChoice) {
    drawGame();
    
  }
  else{
    
    let userWin = true;
    if (userchoice == "rock") {
        //paper,scissors
        if(compChoice == "scissors"){
            userWin=true;
        }else{
            userWin=false;
        }        
    }else if(userchoice == "paper"){
        //rock,scissors
        if(compChoice == "rock"){
            userWin=true;
        }else{
            userWin=false;
        }
    }else{
        if (userchoice == "scissors") {
            //rock,paper
            if(compChoice == "paper"){
                userWin=true;

            }else{
                userWin=false;
            }
            
        }
    }
    gameResult(userWin,compChoice,userchoice);
  }

 
    
   
    
}
for (const choice of choices) {
    choice.addEventListener('click',()=>{
        let userchoice=choice.getAttribute('id');
        
        playGame(userchoice);
        
    });
}
