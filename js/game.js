// import { triggerValue1, triggerValue2 } from "./index.js";

let cells = Array.from(document.querySelectorAll(".cells"));
let twoDArray = [];

document.querySelector("#reset").addEventListener("click", resetGame);

let count = 0;
let bool = 0;

let player1WinCount = 0;
let player2WinCount = 0;
let draw = 0;

let random1 = Math.floor(Math.random() * 3);
let random2 = Math.floor(Math.random() * 3);

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
    this.innerHTML = count % 2 == 0 ? "❌" : "⭕";
    audio.currentTime = 0;
    audio.play();
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
        player1WinCount++;
        console.log(player1WinCount);
    }
    else if (bool == 2) {
        setTimeout(() => { alert("Circle Won"); }, 300);
        setTimeout(() => { resetGame(); }, 350);
        player2WinCount++;
        console.log(player2WinCount);
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
    if (count % 2 != 0) {
        twoDArray.forEach((twoDArrayCells) => {
            twoDArrayCells.forEach((twoDArrayCellsCells) => {
                if (twoDArrayCellsCells == "") {
                    twoDArray[random1][random2].innerHTML = "⭕";
                    audio.currentTime = 0;
                    audio.play();
                    twoDArray[random1][random2].removeEventListener("click", clickEvent);
                    count++;
                    victoryCheck();
                    victoryAlert();
                }
            });
        });
    }
}

// console.log(triggerValue); //not working yet