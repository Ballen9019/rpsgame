let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let reset = document.getElementById('reset');
let oppRock = document.getElementById('opp-rock');
let oppPaper = document.getElementById('opp-paper');
let oppScissors = document.getElementById('opp-scissors');
let playerWin = document.getElementById('you');
let draw = document.getElementById('draw');
let computerWin = document.getElementById('opp');
let scoreReset = document.getElementById('score-reset');
let playerScore = 0;
let pcScore = 0;

function hideResults() {
    playerWin.style.display = 'none';
    computerWin.style.display = 'none';
    draw.style.display = 'none';
}
hideResults();

function hideOpp() {
    oppRock.style.display = 'none';
    oppPaper.style.display = 'none';
    oppScissors.style.display = 'none';
}
hideOpp();

function makeChoice(choice) {
    let choices = ['rock', 'paper', 'scissors'];
    choices.forEach(item => {
        document.getElementById(item).style.display = item === choice ? '' : 'none';
    });
    return choice;
}

rock.onclick = function () {    
    let playerChoice = makeChoice('rock');
    let computerChoice = getComputerchoice();
    getWinner(playerChoice, computerChoice);
    score();
}

paper.onclick = function () {
    let playerChoice = makeChoice('paper');
    let computerChoice = getComputerchoice();
    getWinner(playerChoice, computerChoice);
    score();
}

scissors.onclick = function () {
    let playerChoice = makeChoice('scissors');
    let computerChoice = getComputerchoice();
    getWinner(playerChoice, computerChoice);
    score();
}

reset.onclick = function () {
    let choices = ['rock', 'paper', 'scissors'];
    choices.forEach(item => {
        document.getElementById(item).style.display = '';
    });
    hideOpp();
    hideResults();
}

scoreReset.onclick = function(){
    playerScore = 0;
    pcScore = 0;
    updateScore();
}

function getComputerchoice() {
    let oppChoices = ['opp-rock', 'opp-paper', 'opp-scissors'];
    let randomChoice = oppChoices[Math.floor(Math.random() * 3)];
    oppChoices.forEach(item => {
        document.getElementById(item).style.display = item === randomChoice ? '' : 'none';
    });
    return randomChoice;
}

function getWinner(playerChoice, computerChoice) {
    if ((playerChoice === 'rock' && computerChoice === 'opp-scissors') ||
        (playerChoice === 'paper' && computerChoice === 'opp-rock') ||
        (playerChoice === 'scissors' && computerChoice === 'opp-paper')) {
        playerWin.style.display = '';
    } else if ((playerChoice === 'rock' && computerChoice === 'opp-paper') ||
               (playerChoice === 'paper' && computerChoice === 'opp-scissors') ||
               (playerChoice === 'scissors' && computerChoice === 'opp-rock')) {
        computerWin.style.display = '';
    } else {
        draw.style.display = '';
    }
}

function score() {
    if (playerWin.style.display === '') {
        playerScore++;
    } else if (computerWin.style.display === '') {
        pcScore++;
    }
    updateScore();
}

function updateScore() {
    document.getElementById('player').textContent = `Player: ${playerScore}`;
    document.getElementById('computer').textContent = `Computer: ${pcScore}`;
}





