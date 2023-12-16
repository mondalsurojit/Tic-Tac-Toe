let triggerValue = 0;
let wrapperDiv = document.querySelectorAll("#wrapper div");

// Set initial active class
wrapperDiv[0].classList.add("wrapper-div-active");

// Event Delegation is used
document.getElementById("wrapper").addEventListener("click", (e) => {
    // Check if a div inside #wrapper was clicked
    if (e.target.tagName === "DIV") {
        // Toggle active class based on the clicked div
        wrapperDiv.forEach((div) => {
            div.classList.remove("wrapper-div-active");
        });
        e.target.classList.add("wrapper-div-active");
    }
});

document.querySelector("#pcbutton").addEventListener("click", () => {
    triggerValue = 1;
});
document.querySelector("#playerbutton").addEventListener("click", () => {
    triggerValue = 2;
});

export default triggerValue;
