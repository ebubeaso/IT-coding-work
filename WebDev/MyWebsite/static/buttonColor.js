// This JavaScript code changes the color of the homepage button

function changeColor() {
    let button = document.getElementById(arguments[0]);
    let homeLink = document.getElementById("return-home");
    button.style.backgroundColor = arguments[1];
    homeLink.style.color = arguments[2];
};

let returnButton = document.querySelector(".return");
// When your mouse hovers over the button
returnButton.addEventListener("mouseover", () => {
    changeColor("return-button", "green", "white");
    returnButton.style.border = "5px solid white";
}, false);
// When your mouse does not hover over the button
returnButton.addEventListener("mouseout", () => {
    changeColor("return-button", "white", "black");
    returnButton.style.border = "4px solid black";
})