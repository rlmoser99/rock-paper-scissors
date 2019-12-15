function computerPlay() {
    const number = (Math.random() * 3);
    if (number <= 1) {
        return 'Rock';
    } else if (number >= 2) {
        return 'Scissors';
    }
    else return 'Paper';
}

// let computerScore = 0;
// let playerScore = 0;

function playRound(playerSelection, computerSelection) {
    playerSelection = this.textContent.toLowerCase();
    computerSelection = computerPlay();
    console.log(`player: ${playerSelection}`);
    console.log(`computer: ${computerSelection}`);
    if (playerSelection == 'rock' && computerSelection == 'Scissors') {
        console.log( `You Win! Rock beats Scissors.`);
    } else if (playerSelection == 'rock' && computerSelection == 'Paper') {
        console.log( `You Lose! Paper covers rock`);
    } else if (playerSelection == 'paper' && computerSelection == 'Scissors') {
        console.log( `You Lose! Scissors cut paper`);
    } else if (playerSelection == 'paper' && computerSelection == 'Rock') {
        console.log( `You Win! Paper covers rock`);
    } else if (playerSelection == 'scissors' && computerSelection == "Rock") {
        console.log( `You Lose! Scissors beats rock`);
    } else if (playerSelection == 'scissors' && computerSelection == 'Paper') {
        console.log( `You Win! Scissors beat paper`);
    }
    else console.log( `That was a draw. Try Again!`);
}

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

// function playerButton() {
//     // playerSelection = this.textContent;
//     console.log(this.textContent)
// }

rockButton.addEventListener('click', playRound);
paperButton.addEventListener('click', playRound);
scissorsButton.addEventListener('click', playRound);

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

// x Copy your original code into a new file so you don’t lose it.
// x For now, remove the logic that plays exactly five rounds.
// Create three buttons, one for each selection. Add an event listener to the buttons that calls your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
// Add a div for displaying results and change all of your console.logs into DOM methods.
// Display the running score, and announce a winner of the game once one player reaches 5 points.
// You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of the programmer’s life.
// Don’t forget to go back and add your new version to the original Rock Paper Scissors Project!

