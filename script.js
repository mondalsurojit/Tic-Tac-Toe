let cells = Array.from(document.querySelectorAll(".cells"));
let count = 0;
let twoDArray = [];
let bool = 0;

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
    this.innerHTML = count % 2 == 0 ? "❌" : "⭕";
    this.removeEventListener("click", clickEvent);
    count++;
    // Call victory check here if needed
    victoryCheck();
    victoryAlert();
}

function victoryCheck() {
    // Implement the logic to check for a winning condition
    for (let i = 0; i < 3; i++) {
        if (twoDArray[i][0].innerHTML == twoDArray[i][1].innerHTML && twoDArray[i][1].innerHTML == twoDArray[i][2].innerHTML && twoDArray[i][0].innerHTML != "") {
            afterVictory();
            bool = twoDArray[i][0].innerHTML == "❌" ? 1 : 2;
        }
    }
    for (let j = 0; j < 3; j++) {
        if (twoDArray[0][j].innerHTML == twoDArray[1][j].innerHTML && twoDArray[1][j].innerHTML == twoDArray[2][j].innerHTML && twoDArray[0][j].innerHTML != "") {
            afterVictory();
            bool = twoDArray[0][j].innerHTML == "❌" ? 1 : 2;
        }
    }
    if ((twoDArray[0][0].innerHTML == twoDArray[1][1].innerHTML && twoDArray[1][1].innerHTML == twoDArray[2][2].innerHTML && twoDArray[1][1].innerHTML != "") || (twoDArray[0][2].innerHTML == twoDArray[1][1].innerHTML && twoDArray[1][1].innerHTML == twoDArray[2][0].innerHTML && twoDArray[1][1].innerHTML != "")) {
        afterVictory();
        bool = twoDArray[1][1].innerHTML == "❌" ? 1 : 2;
    }
}

function afterVictory() {
    twoDArray.forEach((twoDArrayCells) => {
        twoDArrayCells.forEach((twoDArrayCellsCells) => {
            twoDArrayCellsCells.removeEventListener("click", clickEvent);
        });
    });
}

function victoryAlert() {
    if (bool == 1) {
        setTimeout(() => { alert("Cross Won"); }, 300);
        setTimeout(() => { resetGame(); }, 350);
    }
    else if (bool == 2) {
        setTimeout(() => { alert("Circle Won"); }, 300);
        setTimeout(() => { resetGame(); }, 350);
    }
    else if (count == 9) {
        setTimeout(() => { alert("Draw"); }, 300);
        setTimeout(() => { resetGame(); }, 350);
    }
}

function resetGame() {
    twoDArray.forEach((twoDArrayCells) => {
        twoDArrayCells.forEach((twoDArrayCellsCells) => {
            twoDArrayCellsCells.innerHTML = "";
            twoDArrayCellsCells.addEventListener("click", clickEvent);
        });
    });
    count = 0;
    bool = 0;
}

// Call initializeGame to set up the initial state
defaultState();

// Add an event listener for the reset button
document.querySelector("#reset").addEventListener("click", resetGame);
