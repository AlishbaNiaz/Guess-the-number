let randomNumber;
let triesLeft = 10;
let playerName = "";

function startGame() {
    playerName = document.getElementById("playerName").value.trim();
    if (playerName === "") {
        alert("Please enter your name!");
        return;
    }
    document.getElementById("displayName").textContent = playerName;
    document.getElementById("name-section").style.display = "none";
    document.getElementById("game-section").style.display = "block";
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log("Secret Number:", randomNumber); 
}

function checkGuess() {
    let guessInput = document.getElementById("guess"); 
    let guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Please enter a number between 1 and 100!");
        guessInput.value = "";  
        guessInput.focus();
        return;
    }

    triesLeft--;
    document.getElementById("triesLeft").textContent = triesLeft;

    if (guess === randomNumber) {
        endGame(true);
    } else if (triesLeft === 0) {
        endGame(false);
    } else {
        if (guess < randomNumber) {
            document.getElementById("hint").textContent = "📉 Your number is too small!";
        } else {
            document.getElementById("hint").textContent = "📈 Your guess is too large!";
        }
    }

    guessInput.value = "";
    guessInput.focus();
}

function endGame(win) {
    document.getElementById("game-section").style.display = "none";
    document.getElementById("result-section").style.display = "block";
    if (win) {
        document.getElementById("result-message").textContent = `🎉 Congratulations ${playerName}, you guessed it right!`;
        document.getElementById("result-message").style.color = "green";
    } else {
        document.getElementById("result-message").textContent = `😢 Sorry ${playerName}, you lost the Game. Badam khaya kray 😂😂`;
        document.getElementById("result-message").style.color = "red";
    }
}
