function computerPlay() {
        const number = Math.floor(Math.random() * 1000);
        if (number % 3 === 0) {
            return 'rock';
        } else if (number % 3 === 1) {
            return 'paper';
        }
        else return 'scissors';
    };
    
    let computerScore = 0;
    let playerScore = 0;
    
    function playGame(playerSelection, computerSelection) {
        removeColor ();
            buttonChoice = this.dataset.button;
            playerSelection = buttonChoice;
            computerSelection = computerPlay();
            const userScore = document.querySelector('.user-score');
            const randomScore = document.querySelector('.computer-score');
            if (
                    (playerSelection == 'rock' && computerSelection == 'scissors') ||
                    (playerSelection == 'paper' && computerSelection == 'rock') ||
                    (playerSelection == 'scissors' && computerSelection == 'paper') &&
                            ((computerScore <= 5 || playerScore <= 5))
            ) {
                    results.textContent = `You won, because ${playerSelection} beats ${computerSelection}.`;
                    playerScore++;
                    userScore.textContent = `${playerScore}`;
                    if (playerScore >= 5) {
                        results.textContent = `GAME OVER. Congrats! You beat the computer! Refresh to try again!`;
                        rockButton.removeEventListener('click', playGame);
                        paperButton.removeEventListener('click', playGame);
                        scissorsButton.removeEventListener('click', playGame);
                    }
            } else if (
                    (playerSelection == 'rock' && computerSelection == 'paper') ||
                    (playerSelection == 'paper' && computerSelection == 'scissors') ||
                    (playerSelection == 'scissors' && computerSelection == 'rock') &&
                            ((computerScore <= 5 || playerScore <= 5))
            ) {
                    results.textContent = `You lost, because ${computerSelection} beats ${playerSelection}.`;
                    computerScore++;
                    randomScore.textContent = `${computerScore}`;
                    if (computerScore >= 5) {
                        results.textContent = `GAME OVER. Sorry, the computer won. Refresh to try again!`;
                        rockButton.removeEventListener('click', playGame);
                        paperButton.removeEventListener('click', playGame);
                        scissorsButton.removeEventListener('click', playGame);
                    }
            } else {
                    results.textContent = `It's a tie. The computer picked ${computerSelection} too. Try Again!`;
            }
        computerColor(computerSelection);
    }
    
function computerColor (computerSelection) {
        if (computerSelection == 'rock') {
                computerRock.classList.add('computerPick');
        }
        if (computerSelection == 'paper') {
                computerPaper.classList.add('computerPick');
        }
        if (computerSelection == 'scissors') {
                computerScissors.classList.add('computerPick');
        }
}

function removeColor () {
        computerRock.classList.remove('computerPick');
        computerPaper.classList.remove('computerPick');
        computerScissors.classList.remove('computerPick');
}




    const rockButton = document.querySelector('.rock');
    const paperButton = document.querySelector('.paper');
    const scissorsButton = document.querySelector('.scissors');
    
    rockButton.addEventListener('click', playGame);
    paperButton.addEventListener('click', playGame);
    scissorsButton.addEventListener('click', playGame);
    
    const resultDiv = document.createElement('div');
    const results = document.createElement('p');
    resultDiv.appendChild(results);
    resultDiv.classList.add('round-result')
    const userContainer = document.querySelector('.user-container')
    userContainer.insertAdjacentElement('afterend', resultDiv);

    const computerRock = document.querySelector('.computer-rock');
    const computerPaper = document.querySelector('.computer-paper');
    const computerScissors = document.querySelector('.computer-scissors');

// Add hover and active states
// Change color of computer choice 
// Don’t forget to go back and add your new version to the original Rock Paper Scissors Project!
    