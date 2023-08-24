let cells = document.querySelectorAll(".cells");
let count = 0;

function defaultstate() {
    for (let i = 0; i < 9; i++) {
        cells[i].addEventListener("click", clickevent);
        function clickevent() {
            if (count % 2 == 0) {
                cells[i].innerHTML = "❌";
                cells[i].removeEventListener("click", clickevent);
            }
            else {
                cells[i].innerHTML = "⭕";
                cells[i].removeEventListener("click", clickevent);
            }
            /*if (cells[0].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[9].innerHTML) {
                i = 8;
            }*/
            count++;
        }

    }
}
defaultstate();

document.querySelector("#reset").addEventListener("click", () => {
    for (let i = 0; i < 9; i++) {
        cells[i].innerHTML = "";
    }
    count = 0;
    defaultstate();
});
