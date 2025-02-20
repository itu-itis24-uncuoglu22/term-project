let input = document.getElementById("input");
let submitBtn = document.getElementById("submit-btn");
let resetBtn = document.getElementById("reset-btn");
let scoreContainer = document.getElementById("score");
let playerScore = 0;
let playerLives = 3;
let hearts = document.getElementById("hearts");

let answer = ['C', 'L', 'O', 'U', 'D'];
let cardImgs = ["card-c.svg", "card-l.svg", "card-o.svg", "card-u.svg", "card-d.svg"];
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
    resetCards();

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

function resetCards() {
    for (let i = 0; i<5; i++) {
        let image = document.getElementById(`card-${i}`);
        image.src = "card-hidden.svg"; 
    }
}

function revealCard(index) {
    const image = document.getElementById(`card-${index}`);
    image.src = cardImgs[index];
}

function revealAllCards(counter) {
    for (let i = counter; i < 5; i++) {
        revealCard(i);
    }
}

function inputHandler(guess) {
    if (typeof(guess) == "string"){
        let trimmed_guess = guess.replace(/\s+/g, '');
        trimmed_guess = trimmed_guess.toUpperCase();
        console.log(`Input has been registered ${trimmed_guess}`);

        if (trimmed_guess.length == 1) {
            if (trimmed_guess === answer[counter]){
                revealCard(counter);
                counter += 1;

                updateScore();
                
                if (counter == 5) {
                    gameOverWin();
                }
            }
            else {
                playerLives -= 1;
                updateHearts();

                if (playerLives <= 0) {
                    gameOverLose();
                }
            }
        }
        else if (trimmed_guess.length == 0) {
            window.alert("ENTER A VALID INPUT: EMPTY INPUT")
        }
        else {
            if (trimmed_guess === 'CLOUD') {
                gameOverWin();
            }
            else {
                playerLives = 0;
                updateHearts();
                gameOverLose();
            }
        }
    }
    if (counter != 0)
    {
        resetBtn.style.display = "block";
    }

    input.value = "";
}

function updateScore() {
    playerScore += 20;
    scoreContainer.innerHTML = String(playerScore);
}

function updateScoreWin() {
    playerScore = 100;
    scoreContainer.innerHTML = String(playerScore);
}

function gameOverLose() {
    window.alert("YOU'VE LOST...");
    submitBtn.disabled = true;
    submitBtn.style.backgroundColor = "gray";
    resetBtn.style.display = "block";
}

function gameOverWin() {
    revealAllCards(counter);
    updateScoreWin();
    window.alert("YOU'VE WON!!!");
    submitBtn.disabled = true;
    submitBtn.style.backgroundColor = "gray";
    resetBtn.style.display = "block";
}

submitBtn.addEventListener("click", () => inputHandler(input.value));
resetBtn.addEventListener("click", () => initialize());
