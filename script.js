let computerScore = 0;
let playerScore = 0;
let roundNum = 1;

// Naming User and Computer Scores to update
const userScore = document.querySelector('.user-score');
const randomScore = document.querySelector('.computer-score');

// Naming User's Buttons to add event listeners
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

// Naming Computer's Buttons to add event listeners
const computerRock = document.querySelector('.computer-rock');
const computerPaper = document.querySelector('.computer-paper');
const computerScissors = document.querySelector('.computer-scissors');

// Naming and Placing the "Results" of each round
const userContainer = document.querySelector('.user-container');
const gameWrapper = document.querySelector('.game-wrapper');

// Creating an Array for making a turn log
let resultsArray = [];
let resultsLog = document.createElement('ul');
resultsLog.classList.add('round-result');
gameWrapper.insertAdjacentElement('beforeend', resultsLog);

// Creating a button to refresh page
const newGame = document.createElement('div');
newGame.textContent = `Play again`;
newGame.classList.add('button', 'refresh');

// Function to refresh page
function refreshPage() {
        window.location.reload(true);
}

// A new result will appear at the top of the log for each turn
function gameLog() {
        var li = document.createElement('li');
        li.textContent = resultsArray[`${resultsArray.length -1}`];
        resultsLog.insertAdjacentElement('afterbegin', li);
}

// Creating a equally random outcome - rock, paper, or scissors
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

// Adding animation to the Computer's "Button"
function computerColor(computerSelection) {
        if (computerSelection === 'rock') {
                removeColor();
                computerRock.classList.add('computerPick');
        }
        if (computerSelection === 'paper') {
                removeColor();
                computerPaper.classList.add('computerPick');
        }
        if (computerSelection === 'scissors') {
                removeColor();
                computerScissors.classList.add('computerPick');
        }
}

// Removing color from the Computer's "Button"
function removeColor() {
        computerRock.classList.remove('computerPick');
        computerPaper.classList.remove('computerPick');
        computerScissors.classList.remove('computerPick');
}

// Removing color from the User's "Button"
function removeUserColor() {
        rockButton.classList.remove('userClick');
        paperButton.classList.remove('userClick');
        scissorsButton.classList.remove('userClick');
}

// Adding :hover state to User's Button
function userHover() {
        if (playerScore <= 4 && computerScore <= 4) {
                this.classList.add('userHover');
        }
}

// Adding :hover state to New Game button (refresh page)
function refreshHover() {
        newGame.classList.add('userHover');
}

// Removing :hover state from Buttons
function removeHover() {
        this.classList.remove('userHover');
}

function playGame(playerSelection, computerSelection) {
        playerSelection = this.dataset.button;
        computerSelection = computerPlay();
        removeUserColor(); // Removes any current animation
        this.classList.add('userClick'); // Adds new button animation
        if (
                (playerSelection === 'rock' && computerSelection === 'scissors') ||
                (playerSelection === 'paper' && computerSelection === 'rock') ||
                (playerSelection === 'scissors' &&
                        computerSelection === 'paper' &&
                        (computerScore <= 5 || playerScore <= 5))
        ) {
                playerScore++; // New Score
                resultsArray.push(`You won round #${roundNum}: ${playerSelection} beats ${computerSelection}. Score: ${playerScore} - ${computerScore}.`);
                userScore.textContent = `${playerScore}`; // Updates Score
                if (playerScore >= 5) {
                        resultsArray.push(`YOU WON! You got 5 points! Round #${roundNum}: ${playerSelection} beats ${computerSelection}.`);
                        rockButton.removeEventListener('click', playGame);
                        paperButton.removeEventListener('click', playGame);
                        scissorsButton.removeEventListener('click', playGame);
                        resultsLog.insertAdjacentElement('beforebegin', newGame);
                }
                roundNum++;
        } else if (
                (playerSelection === 'rock' && computerSelection === 'paper') ||
                (playerSelection === 'paper' && computerSelection === 'scissors') ||
                (playerSelection === 'scissors' &&
                        computerSelection === 'rock' &&
                        (computerScore <= 5 || playerScore <= 5))
        ) {
                computerScore++; // Computer Score
                resultsArray.push(`Computer won round #${roundNum}: ${computerSelection} beats ${playerSelection}. Score: ${playerScore} - ${computerScore}.`);
                randomScore.textContent = `${computerScore}`; // Updates Score
                if (computerScore >= 5) {
                        resultsArray.push(`You lost. The computer was first to get 5 points. Round #${roundNum}: ${computerSelection} beats ${playerSelection}.`);
                        rockButton.removeEventListener('click', playGame);
                        paperButton.removeEventListener('click', playGame);
                        scissorsButton.removeEventListener('click', playGame);
                        resultsLog.insertAdjacentElement('beforebegin', newGame);
                }
                roundNum++;
        } else {
                resultsArray.push(`Tie for round #${roundNum}: ${playerSelection} and ${computerSelection}. No points.`);
                roundNum++;

        }
        computerColor(computerSelection); // Adds animation for Computer's "Button"
        gameLog();
}

// Removing animation for User's Button
function removeClick() {
        this.classList.remove('userClick');
        this.classList.remove('userHover');
}

// User's Button Event Listener to Play the Game
rockButton.addEventListener('click', playGame);
paperButton.addEventListener('click', playGame);
scissorsButton.addEventListener('click', playGame);

// User's Button Event Listener to remove animation
rockButton.addEventListener('transitionend', removeClick);
paperButton.addEventListener('transitionend', removeClick);
scissorsButton.addEventListener('transitionend', removeClick);

// User's Button Event Listener for :hover state
rockButton.addEventListener('mouseover', userHover);
paperButton.addEventListener('mouseover', userHover);
scissorsButton.addEventListener('mouseover', userHover);

// End Game Button to refresh page (hover start & end, click)
newGame.addEventListener('mouseover', refreshHover);
newGame.addEventListener('mouseleave', removeHover);
newGame.addEventListener('click', refreshHover);

// User's Button Event Listener to remove :hover state
rockButton.addEventListener('mouseleave', removeHover);
paperButton.addEventListener('mouseleave', removeHover);
scissorsButton.addEventListener('mouseleave', removeHover);

// "Computer's Buttons" to remove animation
computerRock.addEventListener('transitionend', removeColor);
computerPaper.addEventListener('transitionend', removeColor);
computerScissors.addEventListener('transitionend', removeColor);

// Refresh Page Button at the end of the game
newGame.addEventListener('click', refreshPage);
