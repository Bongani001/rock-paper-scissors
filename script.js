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

/*function game() {
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
*/
const results = document.querySelector('.results');
const score = document.querySelector('.score');
const reset = document.querySelector('.reset');
function game() {
    computerSelection = getComputerChoice()
    let round = playRound(playerSelection, computerSelection);
    const result  = document.createElement('div');
    result.classList.value = 'result';
    result.textContent = round;
    results.appendChild(result);
    score.textContent = `${playerWin} \: ${computerWin}`;
    if (playerWin == 5 || computerWin == 5) {
        reset.style.display = 'flex';
        return winnerGame();
    }
    return;
}

reset.addEventListener('click', e => {
    playerWin = 0;
    computerWin = 0;
    score.textContent = '';
    results.textContent = '';
    winner.textContent = '';
    reset.style.display = 'none';
})



const winner = document.querySelector('.winner');

function winnerGame() {
    if (playerWin > computerWin) {
        winner.textContent = 'You win the game, well done.';
    } else if (playerWin < computerWin) {
        winner.textContent = 'You lost the game, better luck next time.';
    } else {
        winner.textContent = 'It\'s a draw.';
    };
}

const rock = document.querySelector('.rock')
rock.addEventListener('click', function() {
    playerSelection = "Rock";
    return playerSelection;
})

const paper = document.querySelector('.paper')
paper.addEventListener('click', function() {
    playerSelection = "Paper";
    return playerSelection;
})

const scissors = document.querySelector('.scissors')
scissors.addEventListener('click', function() {
    playerSelection = "Scissors";
    return playerSelection;
})




const buttons = document.querySelectorAll('#game-button')
buttons.forEach(button => button.addEventListener('click', game))