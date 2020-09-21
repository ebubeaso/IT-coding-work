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

function changeColor() {
    document.getElementById(arguments[2]).style.color = arguments[0];
    document.getElementById(arguments[2]).style.backgroundColor = arguments[1];
};

//event listeners for the success webpage
let goHome = document.getElementById('homeButton');
goHome.addEventListener('mouseover', function() {
    changeColor('white', 'blue', 'homeButton');
}, false);
goHome.addEventListener('mouseout', function() {
    changeColor('black', 'antiquewhite', 'homeButton');
}, false);
goHome.addEventListener('click', backHome, false);