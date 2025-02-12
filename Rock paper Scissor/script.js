// Rock Paper scissor

let computerScore = 0;
let HumanScore = 0;

const getComputermove = () => {
  let randomNum = Math.random();

  // console.log(randomNum);

  // Computer Logic
  let computerMove = "";
  if (randomNum <= 0.33) {
    computerMove = "rock";
  } else if (randomNum > 0.33 && randomNum <= 0.66) {
    computerMove = "paper";
  } else {
    computerMove = "scissor";
  }
  // console.log(computerMove);
  return computerMove;
};

const getHumanMove = () => {
  let input = prompt("What's Your Choice? (rock, paper, scissor)").toLowerCase().trim();
  while (input !== "rock" && input !== "paper" && input !== "scissor") {
    input = prompt("Invalid Choice , Choose from these(rock, paper, scissor)");
  }
  let humanChoice = input.toLowerCase().trim();
  // console.log(humanChoice);
  return humanChoice;
};

const playRound = (computerChoice, playerChoice) => {
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
