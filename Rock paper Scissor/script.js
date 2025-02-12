// Rock Paper scissor
// Generate random move for computer
//

let computerScore = 0;
let HumanScore = 0;

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
  console.log(computerMove);
  return computerMove;
};
let computerChoice = getComputermove();

let getHumanMove = () => {
  let input = prompt("What's Your Choice??");
  let humanChoice = input.toLowerCase().trim();
  // console.log(humanChoice);
  return humanChoice;
};
let playerChoice = getHumanMove();

let playRound = (computerChoice, playerChoice) => {
  if (computerChoice === playerChoice) {
    console.log("TIE");
  } else if (computerChoice === "rock") {
    if (playerChoice === "paper") {
      HumanScore += 1;
    } else if (playerChoice === "scissor") {
      computerScore += 1;
    }
  } else if (computerChoice === "paper") {
    if (playerChoice === "rock") {
      computerScore += 1;
    } else if (playerChoice === "scissor") {
      HumanScore += 1;
    }
  } else if (computerChoice === "scissor") {
    if (playerChoice === "rock") {
      HumanScore += 1;
    } else if (playerChoice === "paper") {
      computerScore += 1;
    }
  }
};

playRound(computerChoice, playerChoice);
