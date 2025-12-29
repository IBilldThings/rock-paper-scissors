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
    playerChoice = String(userInput).toLowerCase();
    return playerChoice
}

console.log(getComputerChoice());
console.log(getHumanChoice());