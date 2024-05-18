function playerChoice(choice) {
    document.getElementById("player-choice").innerHTML = choice
    cpuChoice(choice);
}

function cpuChoice(playerChoice) {
    let cpuResult = getRandomResult();
    document.getElementById("cpu-choice").innerHTML = cpuResult;
    compareResults(playerChoice, cpuResult);
}

function getRandomResult() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            return "ERROR!";
    };
}
