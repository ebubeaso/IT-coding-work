// function that changes the color of HTML elements
function changeColor() {
    document.getElementById(arguments[2]).style.color = arguments[0];
    document.getElementById(arguments[2]).style.backgroundColor = arguments[1];
};

//redirects back to the home page
function backHome() {
    let msg = "This will take you back to the main page. Continue?";
    let redirect = "index.html";
    if (confirm(msg)) {
        window.location = redirect;
    }
    else {
        alert("Action cancelled. You will remain on this page.");
    }
};

//My event listeners. It is considered bad practice to use HTML elements
//These are the event listeners for the form page
let returnButton = document.getElementById("return");
returnButton.addEventListener('mouseover', function() {
    changeColor('white', 'darkred', 'return');
}, false);
returnButton.addEventListener('mouseout', function() {
    changeColor('black', 'antiquewhite', 'return');
}, false);
returnButton.addEventListener('click', backHome, false);

let submitButton = document.getElementById('submit');
submitButton.addEventListener('mouseover', function() {
    changeColor('white', 'green', 'submit');
}, false);
submitButton.addEventListener('mouseout', function() {
    changeColor('black', 'antiquewhite', 'submit');
}, false);