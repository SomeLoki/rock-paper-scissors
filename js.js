console.log("The link is established");

const getRandom = function () {
  let randomnum = ((Math.floor(Math.random()*3)) + 1);
  return randomnum;
}

const getComputerChoice = function() {
  switch (getRandom()) {
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


const getHumanChoice = function () {
  console.log(this)
  console.log(this.className);
  playRound(this.className, getComputerChoice());

}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", getHumanChoice);
});

const body = document.querySelector("body");
const endOfRoundMessage = document.createElement("div");
const scoreBox = document.createElement("div");
const humanScoreText = document.createElement("span")
const computerScoreText = document.createElement("span")
let humanScore = 0, computerScore = 0;

body.appendChild(scoreBox);
body.appendChild(endOfRoundMessage);
scoreBox.appendChild(humanScoreText);
scoreBox.appendChild(computerScoreText);




const endOfRound = function(result, humanChoice, computerChoice) {
  if (result == "tie") {
    endOfRoundMessage.textContent = (`You both have picked ${humanChoice} therefore it is a tie. Player score: ${humanScore} Computer score: ${computerScore}`);
    humanScoreText.textContent = `Player Score: ${humanScore}  `;
    computerScoreText.textContent = `Computer Score: ${computerScore}  `;
    } else if (result == "human") {
      humanScore = ++humanScore;
      endOfRoundMessage.textContent = (`You won! Your ${humanChoice} beats the computers ${computerChoice} . Player score: ${humanScore} Computer score: ${computerScore}`)
      humanScoreText.textContent = `Player Score: ${humanScore}  `;
      computerScoreText.textContent = `Computer Score: ${computerScore}  `;
    } else {
    computerScore = ++computerScore;
    endOfRoundMessage.textContent = (`You lost! Your ${humanChoice} lost to the computers ${computerChoice} . Player score: ${humanScore} Computer score: ${computerScore}`)
    humanScoreText.textContent = `Player Score: ${humanScore}  `;
    computerScoreText.textContent = `Computer Score: ${computerScore}  `;
  }
  if ( humanScore >= 5 || computerScore >= 5 ) {
    humanScore >= 5 ? endOfRoundMessage.textContent = `You have won the game!` : endOfRoundMessage.textContent = `The computer has won! Better luck next time.`;
    buttons.forEach((button) => {
      button.removeEventListener("click", getHumanChoice);
    });
  }
}


function playRound(humanChoice, computerChoice) {
  let result = ""
  switch (humanChoice) {
    case "rock":
      if (computerChoice === "rock") {
        result = "tie";
      } else if (computerChoice === "paper") {
        result = "computer";
      } else if (computerChoice === "scissors") {
        result = "human";
      }
      break;
    case "paper":
      if (computerChoice === "rock") {
        result = "human";
      } else if (computerChoice === "paper") {
        result = "tie";
      } else if (computerChoice === "scissors") {
        result = "computer";
      }
      break;
      case "scissors":
        if (computerChoice === "rock") {
          result = "computer";
        } else if (computerChoice === "paper") {
          result = "human";
        } else if (computerChoice === "scissors") {
          result = "tie";
        }
        break;
  }
  endOfRound(result, humanChoice, computerChoice);

}



