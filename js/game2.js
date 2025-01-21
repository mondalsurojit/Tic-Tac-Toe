let cells = Array.from(document.querySelectorAll(".cells"));
let twoDArray = [];

document.querySelector("#reset").addEventListener("click", resetGame);

let count = 0;
let bool = 0;

let playerWinCount = 0;
let computerWinCount = 0;
let draw = 0;

let audio = new Audio("audio/clickSound.mp3");
(function bgmusic() {
    let bgMusic = new Audio("audio/bgmusic.mp3");
    bgMusic.loop = true;
    bgMusic.volume = 0.1;
    bgMusic.play();
})();

(function defaultState() {
    for (let i = 0; i < 3; i++) {
        twoDArray[i] = [];
        for (let j = 0; j < 3; j++) {
            twoDArray[i][j] = cells[i * 3 + j];
            twoDArray[i][j].addEventListener("click", clickEvent);
        }
    }
})();

function clickEvent() {
    this.innerHTML = "❌";
    audio.currentTime = 0;
    audio.play();
    this.removeEventListener("click", clickEvent);
    count++;
    victoryCheck();
    victoryAlert();
    if (count % 2 != 0) {
        vsPC();
    }
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
        setTimeout(() => { alert("Player Won"); }, 300);
        setTimeout(() => { resetGame(); }, 350);
        playerWinCount++;
        console.log(playerWinCount);
    }
    else if (bool == 2) {
        setTimeout(() => { alert("Computer Won"); }, 300);
        setTimeout(() => { resetGame(); }, 350);
        computerWinCount++;
        console.log(computerWinCount);
    }
    else if (count == 9) {
        setTimeout(() => { alert("Draw"); }, 300);
        setTimeout(() => { resetGame(); }, 350);
        draw++;
        console.log(draw);
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

function vsPC() {
    let emptyCells = [];
    twoDArray.forEach((row) => {
        row.forEach((cell) => {
            if (cell.innerHTML == "") {
                emptyCells.push(cell);
            }
        });
    });

    if (emptyCells.length > 0) {
        let randomIndex = Math.floor(Math.random() * emptyCells.length);
        let pcMove = emptyCells[randomIndex];
        pcMove.innerHTML = "⭕";
        audio.currentTime = 0;
        audio.play();
        pcMove.removeEventListener("click", clickEvent);
        count++;
        victoryCheck();
        victoryAlert();
    }
}