
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
    let playerPoints=0;
  let computerPoints=0;
  while(true){
  const playerSelection = prompt("Enter your move");
  const computerSelection = computerPlay();
  let result=playRound(playerSelection, computerSelection);
  console.log(result);
  if(result=="Player Wins!"){
    playerPoints++;
  }
  if(result=="Computer Wins!"){
    computerPoints++;
  }
  if(playerPoints>=5){
    console.log("Player has won 5 rounds")
    break;
  }
  if(computerPoints>=5){
    console.log("Computer has won 5 rounds")
    break;
  }
  }
}

game();