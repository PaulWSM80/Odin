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

function compareResults(player, cpu) {
    let winnerDisplay = document.getElementById("result");
    if (player == cpu) {
        winnerDisplay.innerHTML = "Draw";
        return;
    };
    if (
        (player == "Rock" && cpu == "Scissors") ||
        (player == "Paper" && cpu == "Rock") ||
        (player == "Scissors" && cpu == "Paper")
    ) {
        winnerDisplay.innerHTML = "Player Wins"
        increment(document.getElementById("player-score"))
    } else {
        winnerDisplay.innerHTML = "CPU Wins"
        increment(document.getElementById("cpu-score"))
    }
}

function increment(score) {
    score.innerHTML = parseInt(score.innerHTML) + 1;
}
