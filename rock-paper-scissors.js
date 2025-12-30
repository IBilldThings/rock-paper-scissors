let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice(){
    userInput = window.prompt("What is your choice?");
    let playerChoice = String(userInput).toLowerCase();
    return playerChoice
}


function playRound(humanChoice, computerChoice){

    let result = "";

    switch (`${humanChoice}-${computerChoice}`) {
        case "rock-scissors":
        case "paper-rock":
        case "scissors-paper":
            result = "Human wins!";
            humanScore++;
            break;

        case "scissors-rock":
        case "rock-paper":
        case "paper-scissors":
            result = "Computer wins!";
            computerScore++;
            break;

        default:
            result = "Tie!";
    }

    return result
}

function playGame(){
    for (i = 0; i < 6; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
    }
}

playGame();
console.log("human: " + humanScore, "comp: " + computerScore);