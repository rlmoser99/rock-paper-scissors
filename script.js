let computerScore = 0;
let playerScore = 0;

const resultDiv = document.createElement('div');
const results = document.createElement('p');
resultDiv.appendChild(results);
resultDiv.classList.add('round-result');
const userContainer = document.querySelector('.user-container');
userContainer.insertAdjacentElement('afterend', resultDiv);

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

const computerRock = document.querySelector('.computer-rock');
const computerPaper = document.querySelector('.computer-paper');
const computerScissors = document.querySelector('.computer-scissors');

function computerPlay() {
        const number = Math.floor(Math.random() * 1000);
        if (number % 3 === 0) {
                return 'rock';
        }
        if (number % 3 === 1) {
                return 'paper';
        }
        return 'scissors';
}

function computerColor(computerSelection) {
        if (computerSelection === 'rock') {
                computerRock.classList.add('computerPick');
        }
        if (computerSelection === 'paper') {
                computerPaper.classList.add('computerPick');
        }
        if (computerSelection === 'scissors') {
                computerScissors.classList.add('computerPick');
        }
}

function playGame(playerSelection, computerSelection) {
        const buttonChoice = this.dataset.button;
        playerSelection = buttonChoice;
        this.classList.add('userClick');
        computerSelection = computerPlay();
        const userScore = document.querySelector('.user-score');
        const randomScore = document.querySelector('.computer-score');
        if (
                (playerSelection === 'rock' && computerSelection === 'scissors') ||
                (playerSelection === 'paper' && computerSelection === 'rock') ||
                (playerSelection === 'scissors' &&
                        computerSelection === 'paper' &&
                        (computerScore <= 5 || playerScore <= 5))
        ) {
                results.textContent = `You won, because ${playerSelection} beats ${computerSelection}.`;
                playerScore++;
                userScore.textContent = `${playerScore}`;
                if (playerScore >= 5) {
                        results.textContent = `Congrats! You won the FINAL ROUND, because ${playerSelection} beats ${computerSelection}. Refresh to try again!`;
                        rockButton.removeEventListener('click', playGame);
                        paperButton.removeEventListener('click', playGame);
                        scissorsButton.removeEventListener('click', playGame);
                }
        } else if (
                (playerSelection === 'rock' && computerSelection === 'paper') ||
                (playerSelection === 'paper' && computerSelection === 'scissors') ||
                (playerSelection === 'scissors' &&
                        computerSelection === 'rock' &&
                        (computerScore <= 5 || playerScore <= 5))
        ) {
                results.textContent = `You lost, because ${computerSelection} beats ${playerSelection}.`;
                computerScore++;
                randomScore.textContent = `${computerScore}`;
                if (computerScore >= 5) {
                        results.textContent = `You lost the final round, because ${computerSelection} beats ${playerSelection}. GAME OVER, but you can refresh to try again!`;
                        rockButton.removeEventListener('click', playGame);
                        paperButton.removeEventListener('click', playGame);
                        scissorsButton.removeEventListener('click', playGame);
                }
        } else {
                results.textContent = `It's a tie. The computer picked ${computerSelection} too. Try Again!`;
        }
        computerColor(computerSelection);
}

function removeColor() {
        computerRock.classList.remove('computerPick');
        computerPaper.classList.remove('computerPick');
        computerScissors.classList.remove('computerPick');
}

function userHover() {
        if (playerScore <= 4 && computerScore <= 4) {
                this.classList.add('userHover');
        }
}

function removeHover() {
        this.classList.remove('userHover');
}

function removeClick() {
        this.classList.remove('userClick');
        this.classList.remove('userHover');

}

rockButton.addEventListener('click', playGame);
paperButton.addEventListener('click', playGame);
scissorsButton.addEventListener('click', playGame);

computerRock.addEventListener('transitionend', removeColor);
computerPaper.addEventListener('transitionend', removeColor);
computerScissors.addEventListener('transitionend', removeColor);

rockButton.addEventListener('transitionend', removeClick);
paperButton.addEventListener('transitionend', removeClick);
scissorsButton.addEventListener('transitionend', removeClick);

rockButton.addEventListener('mouseover', userHover);
paperButton.addEventListener('mouseover', userHover);
scissorsButton.addEventListener('mouseover', userHover);

rockButton.addEventListener('mouseleave', removeHover);
paperButton.addEventListener('mouseleave', removeHover);
scissorsButton.addEventListener('mouseleave', removeHover);

// Change sizes of fonts and imgs in media queries
// Can't click on next game until animation is over, for animation to happen.
// Update Font Awesome to be local and not linked to their site
// Don’t forget to go back and add your new version to the original Rock Paper Scissors Project!
