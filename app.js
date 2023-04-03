const placeholder1 = document.getElementById('placeholder1');
const placeholder2 = document.getElementById('placeholder2');
const placeholder3 = document.getElementById('placeholder3');
const placeholder4 = document.getElementById('placeholder4');
const gameResult = document.getElementById('win-or-lose');
const main = document.getElementById('main');
const modal = document.getElementById("myModal");

var options = ["paper", "scissors", "rock"];
var randomOption = null;

let stage = 1;
let playerPick = null;

placeholder4.style.display = 'none';
placeholder1.classList.add('paper');
placeholder2.classList.add('scissors');
placeholder3.classList.add('rock');

const score = document.getElementById('result');
var currentResult = parseInt(score.innerHTML);

function start() {
    if (stage === 1) {
        stage1();
    } else if (stage === 2) {
        stage2();
        winOrLose();
    }
}

function stage1() {
    placeholder3.style.display = 'none';
    placeholder2.classList.remove('scissors');
    placeholder2.classList.add('placeholder');
    placeholder4.style.visibility = 'hidden';
    placeholder4.style.display = 'block';
    main.style.background = 'none';
    stage = 2;
}

function stage2() {
    randomOption = options[Math.floor(Math.random() * options.length)];
    placeholder2.classList.remove('placeholder');
    placeholder2.classList.add(randomOption);
    placeholder4.style.visibility = "visible";
    stage = 3;
}

function clearPlaceholder1() {    
    while (placeholder1.classList.length > 0) {
        placeholder1.classList.remove(placeholder1.classList.item(0));
    }
}

function playAgain() {
    while (placeholder1.classList.length > 0) {
        placeholder1.classList.remove(placeholder1.classList.item(0));
    }
    while (placeholder2.classList.length > 0) {
        placeholder2.classList.remove(placeholder2.classList.item(0));
    }
    while (placeholder3.classList.length > 0) {
        placeholder3.classList.remove(placeholder3.classList.item(0));
    }
    placeholder4.style.display = 'none';
    placeholder3.style.display = ('block');
    placeholder1.classList.add('pick', 'paper');
    placeholder2.classList.add('pick', 'scissors');
    placeholder3.classList.add( 'pick','rock');
    main.style.backgroundimage = 'url(./images/image-rules.svg)';
    stage = 1;
}

function openModal() {
    modal.style.display = "flex";
  }
  
function closeModal() {
    modal.style.display = "none";
  }

function paper() {
    if (stage === 1) {        
    playerPick = 'paper';
    }
    start();
}

function scissors() {
    if (stage === 1) {      
        playerPick = 'scissors';
        clearPlaceholder1();
        placeholder1.classList.add('pick', 'scissors');
    }
    start();
}

function rock() {
    if (stage === 1) {
        playerPick = 'rock';
        clearPlaceholder1();
        placeholder1.classList.add('pick', 'rock');
    }
    start();
}




function winOrLose() {
    if (
        playerPick === 'paper' && randomOption === 'scissors' ||
        playerPick === 'scissors' && randomOption === 'rock' ||
        playerPick === 'rock' && randomOption === 'paper') {
            gameResult.innerHTML = "YOU LOST";
            if (currentResult > 0) {
                score.innerHTML = currentResult - 1;
                currentResult = parseInt(score.innerHTML);
            }
    } else if (
        playerPick === 'scissors' && randomOption === 'paper' ||
        playerPick === 'paper' && randomOption === 'rock' ||
        playerPick === 'rock' && randomOption === 'scissors') {
            gameResult.innerHTML = "YOU WIN"
            score.innerHTML = currentResult + 1;
            currentResult = parseInt(score.innerHTML);
    }else {
        gameResult.innerHTML = "DRAW";
    }
}