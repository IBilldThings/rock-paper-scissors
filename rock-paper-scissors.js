let humanScore = 0;
let computerScore = 0;

const btns = document.querySelectorAll(".btn");
const body = document.querySelector("body");

const display = document.createElement("div");
const scoreBoard = document.createElement("p");
const announcement = document.createElement("p");

const resultMessage = document.createElement("p");

const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset Scores";
resetBtn.addEventListener("click", resetFunc);

function getComputerChoice() {
    let compChosen = ""
    const randomValue = Math.random()
    if (randomValue < 0.33){
        compChosen = "scissors"
    };
    if (randomValue > 0.33 && randomValue < 0.66){
        compChosen = "rock"
    };
    if (randomValue > 0.66){
        compChosen = "paper"
    };
    return compChosen
}

function playRound(humanChoice, computerChoice){ // Determines who scores

    let result = "";
    switch (`${humanChoice}-${computerChoice}`) {
        case "rock-scissors":
        case "paper-rock":
        case "scissors-paper":
            humanScore++;
            resultMessage.textContent = "Human wins!";
            break;

        case "scissors-rock":
        case "rock-paper":
        case "paper-scissors":
            computerScore++;
            resultMessage.textContent = "Computer wins!";
            break;

        default:
            resultMessage.textContent = "Tie!";
    }
    console.log(humanScore, computerScore);
}

function resetFunc(){ // When the game is finished and the player wishes to reset scores to play again
    humanScore = 0
    computerScore = 0
    display.removeChild(scoreBoard);
    display.removeChild(resultMessage);

    scoreBoard.textContent = "human: " + humanScore + " comp: " + computerScore

    display.append(scoreBoard);
    display.removeChild(announcement);
    display.removeChild(resetBtn);
}

btns.forEach(btn => {
    btn.addEventListener("click", callback)

    function callback(){

        if (humanScore !== 5 && computerScore !== 5) {
            let humanChoice = btn.textContent.toLowerCase(); // Run code for playing a round
            let computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);

            if (display.childElementCount > 1){ // If children exists, delete previous and replace with new scores
                display.removeChild(scoreBoard)
            }

            display.appendChild(resultMessage);
            scoreBoard.textContent = "human: " + humanScore + " comp: " + computerScore
            display.appendChild(scoreBoard)
            body.appendChild(display);
        }

        if (humanScore === 5 || computerScore === 5){
            if (humanScore === 5){
                announcement.textContent = "The Human Wins!"
            } else{
                announcement.textContent = "The Computer Wins!"
            }
            display.appendChild(announcement);
            display.appendChild(resetBtn);
        }

    }
});