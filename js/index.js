let wrapperdiv = document.querySelectorAll("#wrapper div");
wrapperdiv[0].classList.add("wrapper-div-active");
wrapperdiv.forEach((wrapperdivCells) => {
    wrapperdivCells.addEventListener("click", (e) => {
        console.log(e.target.id);
        if (e.target.id == 1) {
            wrapperdiv[1].classList.remove("wrapper-div-active");
            wrapperdiv[0].classList.add("wrapper-div-active");
        } else {
            wrapperdiv[0].classList.remove("wrapper-div-active");
            wrapperdiv[1].classList.add("wrapper-div-active");
        }
    });
});
