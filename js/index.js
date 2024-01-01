let triggerValue1 = sessionStorage.getItem("triggerValue1");
let wrapperdiv = Array.from(document.querySelectorAll("#wrapper div"));

if (triggerValue1 == null || triggerValue1 == 1) {
    wrapperdiv[0].classList.add("wrapper-div-active");
    sessionStorage.setItem("triggerValue1", "1");
}
else {
    wrapperdiv[1].classList.add("wrapper-div-active");
}

wrapperdiv.forEach((wrapperdivCells) => {
    wrapperdivCells.addEventListener("click", (e) => {
        if (e.target.id == 1) {
            wrapperdiv[1].classList.remove("wrapper-div-active");
            wrapperdiv[0].classList.add("wrapper-div-active");
            sessionStorage.setItem("triggerValue1", "1");
        } else {
            wrapperdiv[0].classList.remove("wrapper-div-active");
            wrapperdiv[1].classList.add("wrapper-div-active");
            sessionStorage.setItem("triggerValue1", "2");
        }
    });
});

document.querySelector("#pcbutton").addEventListener("click", () => {
    sessionStorage.setItem("triggerValue2", "1");
});
document.querySelector("#playerbutton").addEventListener("click", () => {
    sessionStorage.setItem("triggerValue2", "2");
});



