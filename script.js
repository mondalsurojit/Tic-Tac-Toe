let cells = Array.from(document.querySelectorAll(".cells"));
let count = 0;
let twoDArray = [];

function victoryCheck() {
    // Implement the logic to check for a winning condition
    for (let i = 0; i < 3; i++) {
        if (twoDArray[i][0].innerHTML == twoDArray[i][1].innerHTML && twoDArray[i][1].innerHTML == twoDArray[i][2].innerHTML && twoDArray[i][0].innerHTML != "") {
            console.log("horizonal win");
            afterVictory();
        }
    }
    for (let j = 0; j < 3; j++) {
        if (twoDArray[0][j].innerHTML == twoDArray[1][j].innerHTML && twoDArray[1][j].innerHTML == twoDArray[2][j].innerHTML && twoDArray[0][j].innerHTML != "") {
            console.log("vertical win");
            afterVictory();
        }
    }
    if ((twoDArray[0][0].innerHTML == twoDArray[1][1].innerHTML && twoDArray[1][1].innerHTML == twoDArray[2][2].innerHTML && twoDArray[1][1].innerHTML != "") || (twoDArray[0][2].innerHTML == twoDArray[1][1].innerHTML && twoDArray[1][1].innerHTML == twoDArray[2][0].innerHTML && twoDArray[1][1].innerHTML != "")) {
        console.log("diagonal win");
        afterVictory();
    }
}

function afterVictory() {
    twoDArray.forEach((twoDArrayCells) => {
        twoDArrayCells.forEach((twoDArrayCellsCells) => {
            twoDArrayCellsCells.removeEventListener("click", clickEvent);
        });
    });
}

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
    } else {
        this.innerHTML = "⭕";
        this.removeEventListener("click", clickEvent);
    }
    count++;
    // Call victory check here if needed
    victoryCheck();
}

function resetGame() {
    twoDArray.forEach((twoDArrayCells) => {
        twoDArrayCells.forEach((twoDArrayCellsCells) => {
            twoDArrayCellsCells.innerHTML = "";
            twoDArrayCellsCells.addEventListener("click", clickEvent);
        });
    });
    count = 0;
}

// Call initializeGame to set up the initial state
defaultState();

// Add an event listener for the reset button
document.querySelector("#reset").addEventListener("click", resetGame);
