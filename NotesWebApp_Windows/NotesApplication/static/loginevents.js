//using jQuery for handling the registration popup
$(function() {
    let popupScreen = $('#signup-popup1');
    let popupContent = $('#signup-popup2');
    let closeButton = $('#close-register-button');
    let register = $('#signup');

    //functions for showing and hiding popup
    function showPopup() {
        popupScreen.css('display', 'flex').fadeIn(700);
        popupContent.fadeToggle(700);
    };
    function hidePopup() {
        popupContent.fadeToggle(700);
        popupScreen.fadeOut(700);
    };

    register.on('click', showPopup);
    closeButton.on('click', hidePopup);
});

//using regular JavaScript here:
function changeButtonColor() {
    /* This takes the id value of an HTML element and changes the color to what the second
    argument is */
    let theButton = document.getElementById(arguments[0]);
    theButton.style.backgroundColor = arguments[1];
}

let registerButton = document.getElementById("signup");
//adding event listeners to the register button
registerButton.addEventListener("mouseover", function() {
    changeButtonColor('signup', 'green');
    registerButton.style.fontStyle = 'oblique';
    registerButton.style.border = '3px solid black';
}, false);
registerButton.addEventListener("mouseout", function() {
    changeButtonColor('signup', 'orange');
    registerButton.style.fontStyle = 'normal';
    registerButton.style.border = '1px solid white';
}, false);

// Event for when you forget your password
forgot.addEventListener('click', () => {
    window.location = "recoverpassword.html"
}, false);