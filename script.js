let cells = Array.from(document.querySelectorAll(".cells"));
let count = 0;
let twoDArray = [];

function defaultState() {
    for (let i = 0; i < 3; i++) {
        twoDArray[i] = [];
        for (let j = 0; j < 3; j++) {
            twoDArray[i][j] = cells[i * 3 + j];
            twoDArray[i][j].addEventListener("click", clickEvent);
        }
    }
}

function clickEvent() {
    if (count % 2 == 0) {
        this.innerHTML = "❌";
        this.removeEventListener("click", clickEvent);
        console.log(twoDArray);
    } else {
        this.innerHTML = "⭕";
        this.removeEventListener("click", clickEvent);
    }
    count++;
    // Call victory check here if needed
}

function resetGame() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            twoDArray[i][j].innerHTML = "";
            twoDArray[i][j].addEventListener("click", clickEvent);
        }
    }
    count = 0;
}

function victoryCheck() {
    // Implement the logic to check for a winning condition
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (twoDArray[i][j] == twoDArray[i][j + 1] == twoDArray[i][j + 2]) {
                console.log("win");
            }
            else if (twoDArray[i][j] == twoDArray[i + 1][j] == twoDArray[i + 2][j]) {
                console.log("win");
            }
            else if (twoDArray[0][0] == twoDArray[1][1] == twoDArray[2][2]) {
                console.log("win");
            }
        }
    }
}

// Call initializeGame to set up the initial state
defaultState();

// Add an event listener for the reset button
document.querySelector("#reset").addEventListener("click", resetGame);
