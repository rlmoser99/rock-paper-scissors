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
                    resultDiv.textContent = `You won, because ${playerSelection} beats ${computerSelection}.`;
                    playerScore++;
                    userScore.textContent = `${playerScore}`;
                    if (playerScore >= 5) {
                        resultDiv.textContent = `GAME OVER! YOU WON!`;
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
                    resultDiv.textContent = `You lost, because ${computerSelection} beats ${playerSelection}.`;
                    computerScore++;
                    randomScore.textContent = `${computerScore}`;
                    if (computerScore >= 5) {
                        resultDiv.textContent = `GAME OVER! COMPUTER WON!`;
                        rockButton.removeEventListener('click', playGame);
                        paperButton.removeEventListener('click', playGame);
                        scissorsButton.removeEventListener('click', playGame);
                    }
            } else {
                    resultDiv.textContent = `It's a tie. The computer picked ${computerSelection} too. Try Again!`;
            }
    }
    
    const rockButton = document.querySelector('.rock');
    const paperButton = document.querySelector('.paper');
    const scissorsButton = document.querySelector('.scissors');
    
    rockButton.addEventListener('click', playGame);
    paperButton.addEventListener('click', playGame);
    scissorsButton.addEventListener('click', playGame);
    
    const resultDiv = document.createElement('div');
    resultDiv.classList.add('round-result')
    const userContainer = document.querySelector('.user-container')
    userContainer.insertAdjacentElement('afterend', resultDiv);

    // Don’t forget to go back and add your new version to the original Rock Paper Scissors Project!
    