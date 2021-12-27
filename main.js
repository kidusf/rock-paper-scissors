
function computerPlay(){
  const choice=Math.floor(Math.random()*3)+1;
  if(choice==1){
      return "rock";
  }

  else if(choice==2){
      return "paper";
  }

  else{
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase()=="rock" && computerSelection.toLowerCase()=="rock"){
      return "Tie!";
    }
    else if(playerSelection.toLowerCase()=="paper" && computerSelection.toLowerCase()=="paper"){
      return "Tie!";
    }
    else if(playerSelection.toLowerCase()=="scissors" && computerSelection.toLowerCase()=="scissors"){
      return "Tie!";
    }
    else if(playerSelection.toLowerCase()=="rock" && computerSelection.toLowerCase()=="paper"){
      return "Computer Wins!";
    }
    else if(playerSelection.toLowerCase()=="rock" && computerSelection.toLowerCase()=="scissors"){
      return "Player Wins!";
    }
    else if(playerSelection.toLowerCase()=="paper" && computerSelection.toLowerCase()=="rock"){
      return "Player Wins!";
    }
    else if(playerSelection.toLowerCase()=="paper" && computerSelection.toLowerCase()=="scissors"){
      return "Player Wins!";
    }
    else if(playerSelection.toLowerCase()=="scissors" && computerSelection.toLowerCase()=="rock"){
      return "Computer Wins!";
    }
    else{
      return "Player Wins!";
    }
  }
  
  function game(){
  if(playerSelection!=undefined){
    const computerSelection = computerPlay();
    var result=playRound(playerSelection, computerSelection);
    results.innerHTML=result;
  if(result=="Player Wins!"){
    playerPoints++;
  }
  if(result=="Computer Wins!"){
    computerPoints++;
  }
  if(computerPoints>=5 || playerPoints>=5){
    if(computerPoints>=5){
      results.innerHTML="Computer has won the game!"
    }
    else{
      results.innerHTML="Player has won the game!"
    }
    playerPoints=0;
    computerPoints=0;
  }
  playerScore.innerHTML=playerPoints.toString();
  cpuScore.innerHTML=computerPoints.toString();
}
  
  }
  var playerPoints=0;
    var computerPoints=0;
    var playerSelection;
    var rockButton=document.getElementById("rock");
    var playerScore=document.getElementById("player-score");
    var cpuScore=document.getElementById("CPU-score");
    var results=document.getElementById("result");
    playerScore.innerHTML=playerPoints.toString();
    cpuScore.innerHTML=computerPoints.toString();
    rockButton.addEventListener("click", () => {
      playerSelection="rock";
      console.log(playerSelection);
      game();
      playerSelection=undefined;
    });
    var paperButton=document.getElementById("paper");
    paperButton.addEventListener("click", () => {
      playerSelection="paper";
      console.log(playerSelection);
      game();
      playerSelection=undefined;
    });
    var scissorsButton=document.getElementById("scissors");
    scissorsButton.addEventListener("click", () => {
      playerSelection="scissors";
      console.log(playerSelection);
      game();
      playerSelection=undefined;
    });

  

  

