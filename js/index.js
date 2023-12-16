let triggerValue1 = 0;
let triggerValue2 = 0;
let wrapperdiv = Array.from(document.querySelectorAll("#wrapper div"));

wrapperdiv[0].classList.add("wrapper-div-active");

wrapperdiv.forEach((wrapperdivCells) => {
    wrapperdivCells.addEventListener("click", (e) => {
        if (e.target.id == 1) {
            wrapperdiv[1].classList.remove("wrapper-div-active");
            wrapperdiv[0].classList.add("wrapper-div-active");
            triggerValue1 = 1;
        } else {
            wrapperdiv[0].classList.remove("wrapper-div-active");
            wrapperdiv[1].classList.add("wrapper-div-active");
            triggerValue1 = 2;
        }
    });
});

document.querySelector("#pcbutton").addEventListener("click", () => {
    triggerValue2 = 1;
});
document.querySelector("#playerbutton").addEventListener("click", () => {
    triggerValue2 = 2;
});
export default { triggerValue1, triggerValue2 };


