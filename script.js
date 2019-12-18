function computerPlay() {
    const number = Math.floor(Math.random() * 1000);
    if (number % 3 === 0) {
        return 'rock';
    } else if (number % 3 === 1) {
        return 'paper';
    }
    else return 'scissors';
};

// let computerScore = 0;
// let playerScore = 0;
// const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);


function playRound(playerSelection, computerSelection) {
    buttonChoice = this.dataset.button;
    playerSelection = buttonChoice;
    computerSelection = computerPlay();
    console.log(`player: ${playerSelection}`);
    console.log(`computer: ${computerSelection}`);
    if (
            (playerSelection == 'rock' && computerSelection == 'scissors') ||
            (playerSelection == 'paper' && computerSelection == 'rock') ||
            (playerSelection == 'scissors' && computerSelection == 'paper')
    ) {
            resultDiv.textContent = `You Win, because ${playerSelection} beats ${computerSelection}.`;
    } else if (
            (playerSelection == 'rock' && computerSelection == 'paper') ||
            (playerSelection == 'paper' && computerSelection == 'scissors') ||
            (playerSelection == 'scissors' && computerSelection == 'rock')
    ) {
            resultDiv.textContent = `You Lost, because ${computerSelection} beats ${playerSelection}.`;
    } else {
            resultDiv.textContent = `It's a tie. The computer picked ${computerSelection} too. Try Again!`;
    }
}



const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

rockButton.addEventListener('click', playRound);
paperButton.addEventListener('click', playRound);
scissorsButton.addEventListener('click', playRound);

const resultDiv = document.createElement('div');
resultDiv.classList.add('round-result')
const userContainer = document.querySelector('.user-container')
userContainer.insertAdjacentElement('afterend', resultDiv);


// function playRound(playerSelection, computerPlay) {
//     if (playerSelection == 'rock' && computerPlay == 'Scissors') {
//         playerScore++;
//         return `You Win! Rock beats Scissors. Score: ${playerScore} to ${computerScore}`;
//     } else if (playerSelection == 'rock' && computerPlay == 'Paper') {
//         computerScore++;
//         return `You Lose! Paper covers rock. Score: ${playerScore} to ${computerScore}`;
//     } else if (playerSelection == 'paper' && computerPlay == 'Scissors') {
//         computerScore++;
//         return `You Lose! Scissors cut paper. Score: ${playerScore} to ${computerScore}`
//     } else if (playerSelection == 'paper' && computerPlay == 'Rock') {
//         playerScore++;
//         return `You Win! Paper covers rock. Score: ${playerScore} to ${computerScore}`
//     } else if (playerSelection == 'scissors' && computerPlay == "Rock") {
//         computerScore++;
//         return `You Lose! Scissors beats rock. Score: ${playerScore} to ${computerScore}`
//     } else if (playerSelection == 'scissors' && computerPlay == 'Paper') {
//         playerScore++;
//         return `You Win! Scissors beat paper. Score: ${playerScore} to ${computerScore}`
//     }
//     else return `That was a draw. Try Again! Score: ${playerScore} to ${computerScore}`;
// }


// function game() {
//     for (let i = 0; i < 5; i++) {
//         let playerSelection = prompt('Type: Rock, Paper, or Scissors')
//         playerSelection = playerSelection.toLowerCase();
//         const computerPlay = computerPlay()
//         console.log(playRound(playerSelection, computerPlay))
//     }
//     if (playerScore > computerScore) {
//         console.log(`You're the winner! Final Score: ${playerScore} to ${computerScore}`);
//     } else if (computerScore > playerScore) {
//         console.log(`You're the loser. Final Score: ${playerScore} to ${computerScore}`);
//     } else
//         console.log(`You tied. Final Score: ${playerScore} to ${computerScore}`);
// }

// game();


// Add a div for displaying results and change all of your console.logs into DOM methods.
// Display the running score, and announce a winner of the game once one player reaches 5 points.
// You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of the programmer’s life.
// Don’t forget to go back and add your new version to the original Rock Paper Scissors Project!

