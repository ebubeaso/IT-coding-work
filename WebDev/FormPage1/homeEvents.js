//This is for the event of the button on the homepage to go to the form
let theForm = document.getElementById("formbutton");
theForm.addEventListener('mouseover', function() {
    changeColor('white', 'blue', 'formbutton');
 }, false);
theForm.addEventListener('mouseout', function() {
    changeColor('black', 'antiquewhite', 'formbutton');
}, false);
theForm.addEventListener('click', redirection, false);


// functions that are called in event listeners

//gives a confirmation and an for someone to proceed
function redirection() {
    let redirect = "form.html";
    let message = "Are you sure you want to continue?";
    if (confirm(message)) {
        alert("You are being redirected to the form.");
        window.location = redirect;
    }
    else {
        alert("Action has been cancelled..");
    }
};

function changeColor() {
    document.getElementById(arguments[2]).style.color = arguments[0];
    document.getElementById(arguments[2]).style.backgroundColor = arguments[1];
};