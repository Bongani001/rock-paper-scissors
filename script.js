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

let playerWin = 0;
let computerWin = 0;
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        let result = `It's A Tie!`;
        playerWin++;
        computerWin++;
        return result;
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        computerWin++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        playerWin++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        computerWin++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        playerWin++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        computerWin++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        playerWin++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerGuess = prompt('Enter rock, paper or scissors:');
        let playerSelect = playerGuess.toLowerCase();
        let playerSelection = playerSelect[0].toUpperCase() + playerSelect.slice(1);
        let computerSelection = getComputerChoice();
        let round = playRound(playerSelection, computerSelection);
        console.log(round, ` Player Wins: ${playerWin}`, `Computer Wins: ${computerWin}`);
        if (i === 4) {
            console.log(winner());
        }
    }
}

function winner() {
    if (playerWin > computerWin) {
        console.log('You win the game, well done.');
    } else if (playerWin < computerWin) {
        console.log('You lost the game, better luck next time.');
    } else {
        console.log('It\'s a draw.')
    }
}

game()