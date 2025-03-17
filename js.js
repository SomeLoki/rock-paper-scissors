console.log("The link is established");

// ask the user to pick an option and store it
// convert option to lowercase so that all inputs work
function getHumanChoice() {
  let choice = prompt("Do you choose rock, paper, or scissors?")
  choice = choice.toLowerCase();
  return choice;
}


// have the computer generate an option and store it
// first need to generate a random number, then convert it to an option

function getComputerChoice() {
  switch (genRandom()) {
    case 1:
    return "rock";
    break;

    case 2:
      return "paper";
    break;

    case 3:
      return "scissors";
      break;
  }
}

function genRandom() {
  let randomnum = ((Math.floor(Math.random()*3)) + 1);
  return randomnum;
}

function playGame() {

// variables to store the scores
let humanScore = 0, computerScore = 0;

// compare options

function playRound(humanChoice, computerChoice) {
// need to compare choices to find who the winner is
  let result = ""
  switch (humanChoice) {
    case "rock":
      if (computerChoice == "rock") {
        result = "tie";
      } else if (computerChoice == "paper") {
        result = "computer";
      } else if (computerChoice == "scissors") {
        result = "human";
      }
      break;
    case "paper":
      if (computerChoice == "rock") {
        result = "human";
      } else if (computerChoice == "paper") {
        result = "tie";
      } else if (computerChoice == "scissors") {
        result = "computer";
      }
      break;
      case "scissors":
        if (computerChoice == "rock") {
          result = "computer";
        } else if (computerChoice == "paper") {
          result = "human";
        } else if (computerChoice == "scissors") {
          result = "tie";
        }
        break;
  }
    // need to give points to the winner
  if (result == "tie") {
    console.log(`You both have picked ${humanChoice} therefore it is a tie. Player score: ${humanScore} Computer score: ${computerScore}`)
    } else if (result == "human") {
      humanScore = ++humanScore;
      console.log(`You won! Your ${humanChoice} beats the computers ${computerChoice} . Player score: ${humanScore} Computer score: ${computerScore}`)
    } else {
    computerScore = ++computerScore;
    console.log(`You lost! Your ${humanChoice} lost to the computers ${computerChoice} . Player score: ${humanScore} Computer score: ${computerScore}`)
  }
}

let i = 0;
while (i < 5) {
  newChoices()
  playRound(humanSelection, computerSelection);
i = ++i;
}


  // need to display the winner
if (humanScore > computerScore) {
  console.log(`You have won! You scored ${humanScore} points!`);
} else if (computerScore > humanScore) {
  console.log(`Better luck next time. The computer beat you with a score of ${computerScore}`);
} else {
  console.log(`You have tied! You both have recieved ${humanScore} points.`);
}

}


  // need to give points to the winner

  // need to display the winner
let humanSelection;
let computerSelection;

playGame()

// generate new choices each round
function newChoices() {
  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
}

// give a point to the winner

// declare winner and point total