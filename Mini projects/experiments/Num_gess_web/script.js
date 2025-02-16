let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20 + 1);

document.querySelector(".check").addEventListener("click", function () {
    const guess = document.querySelector(".guess").value;
    console.log(guess);
    if (!guess) {
        document.querySelector('.message').textContent = "Enter a number"
    } else if (guess == secretNumber) {
        document.querySelector('.message').textContent = "Correct Number"
        document.querySelector("body").style.background = "green"
        document.querySelector(".number").style.width = "30rem"
        document.querySelector(".number").textContent = secretNumber
        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore
        }

    } else if (guess > secretNumber) {
        document.querySelector('.message').textContent = "Too high"
        if (score > 1) {
            score = score - 1;
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent = "You Lost the game"
            document.querySelector('.score').textContent = 0
        }

    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = "Too low"
        if (score > 1) {
            score = score - 1;
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent = "You Lost the game"
            document.querySelector('.score').textContent = 0
        }
    }
})

document.querySelector(".again").addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.message').textContent = "Start guessing..."
    document.querySelector('.score').textContent = score
    document.querySelector(".number").textContent = '?'
    document.querySelector("body").style.background = "#222"
    document.querySelector(".number").style.width = "15rem"
    document.querySelector(".guess").value = ''
})