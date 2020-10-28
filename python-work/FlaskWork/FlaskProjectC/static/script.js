//using jQuery to make some fade/slide animations to be more dynamic
$(function() {
    $("header").hide().fadeIn(500);
    $(".title").hide().fadeIn(500);
    $(".content").hide().slideDown(800);
    
    //popup screen for the notes page
    $(".popup-screen").hide().fadeIn(1700);
    $(".popup-content").hide().fadeIn(1800);
});

//using regular JavaScript here:
function changeButtonColor() {
    /* This takes the id value of an HTML element and changes the color to what the second
    argument is */
    let theButton = document.getElementById(arguments[0]);
    theButton.style.backgroundColor = arguments[1];
}

let registerButton = document.getElementById('signup');
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