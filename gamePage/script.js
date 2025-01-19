let input = document.getElementById("input");
let submitBtn = document.getElementById("submit-btn");
let resetBtn = document.getElementById("reset-btn");
let scoreContainer = document.getElementById("score");
let playerScore = 0;
let playerLives = 3;
let hearts = document.getElementById("hearts");

let answer = ['C', 'L', 'O', 'U', 'D'];
let counter = 0;

initialize()


function initialize() {
    input.value = "";
    submitBtn.disabled = false;
    submitBtn.style.backgroundColor = "orangered";
    resetBtn.style.display = "none";
    scoreContainer.innerHTML = "0";
    playerScore = 0;
    playerLives = 3;
    updateHearts();
    counter = 0;
}

function updateHearts() {
    hearts.innerHTML = "";    

    for (let i=0; i<playerLives; i++) {
        const heartImg = document.createElement('img');
        heartImg.src = "life.png";
        heartImg.style = "display: inline-block; height: 1em; width: 1em;";
        hearts.appendChild(heartImg);
    }
}