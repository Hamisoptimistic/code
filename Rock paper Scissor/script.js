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
  // console.log(computerMove);
  return computerMove;
};

let getHumanMove = () => {
  let input = prompt("What's Your Choice??");
  let humanChoice = input.toLowerCase().trim();
  // console.log(humanChoice);
  return humanChoice;
};

let playRound = (computerChoice, playerChoice) => {
  if (computerChoice === playerChoice) {
    console.log("TIE");
  } else if (computerChoice === "rock") {
    if (playerChoice === "paper") {
      HumanScore += 1;
      console.log("You Won");
    } else if (playerChoice === "scissor") {
      console.log("You Lost");
      computerScore += 1;
    }
  } else if (computerChoice === "paper") {
    if (playerChoice === "rock") {
      computerScore += 1;
      console.log("You Lost");
    } else if (playerChoice === "scissor") {
      HumanScore += 1;
      console.log("You Won");
    }
  } else if (computerChoice === "scissor") {
    if (playerChoice === "rock") {
      HumanScore += 1;
      console.log("You Won");
    } else if (playerChoice === "paper") {
      computerScore += 1;
      console.log("You Lost");
    }
  }
};

for (let i = 0; i < 5; i++) {
  let computerChoice = getComputermove();
  let playerChoice = getHumanMove();
  playRound(computerChoice, playerChoice);
  console.log(`Your Score : ${HumanScore}, Computer Score : ${computerScore}`);
}

if (HumanScore > computerScore) {
  console.log("Congratulations! You won the game!");
} else if (HumanScore < computerScore) {
  console.log("The computer won the game!");
} else {
  console.log("The game ended in a tie!");
}
