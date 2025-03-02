function rollDice() {
    return [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];
}

function checkWinner(playerSum, botSum) {
    if (playerSum === 7 || playerSum === 11) {
        displayWinner("Player Wins! Collect your money!", true);
        return true;
    } else if (botSum === 7 || botSum === 11) {
        displayWinner("Bot Wins! Do not be a sore loser!", false);
        return true;
    }
    return false;
}

function displayWinner(message, isPlayerWin) {
    document.getElementById("gameMessage").innerText = message;
    showVideo(isPlayerWin);
}

function showVideo(isPlayerWin) {
    let video = isPlayerWin ? document.getElementById("winVideo") : document.getElementById("lossVideo");
    video.style.display = "block";
    video.play();
}

function playPlayerTurn() {
    let playerRoll = rollDice();
    document.getElementById("die1").value = playerRoll[0];
    document.getElementById("die2").value = playerRoll[1];
    
    let playerSum = playerRoll[0] + playerRoll[1];
    
    document.getElementById("gameMessage").innerText = `You shot a ${playerSum}, now the bot's turn!`;
    
    if (checkWinner(playerSum, 0)) return;
    
    setTimeout(() => {
        playBotTurn();
    }, 1000);
}

function playBotTurn() {
    let botRoll = rollDice();
    document.getElementById("botDie1").value = botRoll[0];
    document.getElementById("botDie2").value = botRoll[1];
    
    let botSum = botRoll[0] + botRoll[1];
    
    if (checkWinner(0, botSum)) return;
    
    setTimeout(() => {
        document.getElementById("gameMessage").innerText = `Bot shot a ${botSum}, no one wins, shoot again!`;
    }, 1000);
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("rollButton").focus();
    document.getElementById("rollButton").addEventListener("click", playPlayerTurn);
    document.getElementById("rollButton").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            playPlayerTurn();
        }
    });
});