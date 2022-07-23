function getComputerChoice() {
    let computerGuess = Math.floor(Math.random() * 3 ) + 1;
    if (computerGuess == 3) {
        let computerChoice = 'Rock';
        return computerChoice;
    } else if (computerGuess == 2) {
        let computerChoice = 'Paper';
        return computerChoice;
    } else {
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        let result = `It's A Tie!`;
        return result;
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
}

let playerGuess = 'rock'
let playerSelect = playerGuess.toLowerCase()
let playerSelection = playerSelect[0].toUpperCase() + playerSelect.slice(1);
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

