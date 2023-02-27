const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

//creating user choice button interaction!
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}));

// creating random choice of the computer
function generateComputerChoice() {
const randomNumber = Math.floor(Math.random() * 3) + 1; // to return possible choices for computer (could also use possibleChoices.length)

if (randomNumber === 1) {
computerChoice = 'Rock';
}
if (randomNumber === 2) {
    computerChoice = 'Scissors';
    }
    if (randomNumber === 3) {
        computerChoice = 'Paper';
        }
computerChoiceDisplay.innerHTML = computerChoice;
}

//win lose conditions for game
function getResult() {
    if (computerChoice === userChoice) {
        result = 'its a draw!';
}
if (computerChoice === 'Rock' && userChoice === 'Paper') {
    result = 'you win!';
}
if (computerChoice === 'Rock' && userChoice === 'Scissors') {
    result = 'you lose!';
}
if (computerChoice === 'Paper' && userChoice === 'Scissors') {
    result = 'you win!';
}
if (computerChoice === 'Paper' && userChoice === 'Rock') {
    result = 'you lose!';
}
if (computerChoice === 'Scissors' && userChoice === 'Rock') {
    result = 'you win!';
}
if (computerChoice === 'Scissors' && userChoice === 'Paper') {
    result = 'you lose!';
}
resultDisplay.innerHTML = result;
}