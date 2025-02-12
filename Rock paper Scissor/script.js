// Rock Paper scissor
// Generate random move for computer
//

let getComputermove = () => {
  let number = Math.random();
  let randomNum = number.toFixed(1);
  // console.log(randomNum);

  // Computer Logic
  let computerMove = "";
  if (randomNum <= 0.3) {
    computerMove = "rock";
  } else if (randomNum > 0.3 && randomNum <= 0.7) {
    computerMove = "paper";
  } else {
    computerMove = "scissor";
  }
  // console.log(computerMove);
  return computerMove;
};
let computerChoice = getComputermove();

let getHumanMove = () => {
  let input = prompt("What's Your Choice??");
  let humanChoice = input.toLowerCase().trim();
  // console.log(playerChoice);
  return humanChoice;
};

let playerChoice = getHumanMove();

let playRound = (a, b) => {};

playRound(computerChoice, playerChoice);
