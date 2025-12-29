function getComputerChoice() {
    chosen = ""
    randomValue = Math.random()
    if (randomValue < 0.33){
        chosen = "Scissors"
    };
    if (randomValue > 0.33 && randomValue < 0.66){
        chosen = "Rock"
    };
    if (randomValue > 0.66){
        chosen = "Paper"
    };
    return chosen
}

console.log(getComputerChoice());