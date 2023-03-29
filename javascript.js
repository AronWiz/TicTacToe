function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomElement = choices[Math.floor(Math.random() * choices.length)];
    return randomElement;
}

function playRound(playerSelection, computerSelection) {
    let ret = "";
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        ret = ["You Draw! both chose " + playerSelection, "tie"];
    } else if(playerSelection === "rock"){
        if(computerSelection==="paper"){
            ret = ["You lose! paper beats rock", "computer"];
        }else {
            ret = ["You win! rock beats scissors", "player"];
        }
    } else if (playerSelection==="paper"){
        if(computerSelection==="rock"){
            ret = ["You win! paper beats rock", "player"];
        } else {
            ret = ["You lose! scissors beats paper", "computer"];
        }
    } else {
        if (computerSelection==="rock"){
            ret = ["You lose! rock beats scissors", "computer"];
        } else {
            ret = ["You win! scissors beats paper", "player"];
        }
    }
    return ret
}

function game(){
    let playerPoints = 0;
    let computerPoints = 0;
    let round = 1;
    for (let round =1; round <=5; round++){
        const playerSelection = prompt("For round:" + String(round) + " Enter a choice from: [Rock,Paper,Scissors] ");
        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection,computerSelection);
        alert("for round:"+ String(round) +" " +result[0]);
        if (result[1] === "tie" ){
            playerPoints++;
            computerPoints++;
        } else if(result[1] === "player"){
            playerPoints++;
        } else {
            computerPoints++;
        }
    }
    if (playerPoints === computerPoints) {
        alert("Tie game!");
    } else if(playerPoints < computerPoints){
        alert("Computer wins the game");
    }else {
        alert("player wins the game"); 
    }
}

game();