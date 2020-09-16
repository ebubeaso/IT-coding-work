//writes a h1 header on the main page
function writeDoc() {
    document.write(`<h1 class="JS">Welcome!! (This header was written
         in JavaScript)</h1>`)
};

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

function submitInfo() {
    alert("Your form has been submitted!!")
    window.location = "success.html";
};

function changeColor() {
    document.getElementById(arguments[2]).style.color = arguments[0];
    document.getElementById(arguments[2]).style.backgroundColor = arguments[1];
    // if (arguments[0] == 'white') {
    //     makeBold("bold");
    // }
    // else { makeBold("normal"); };
};

// function makeBold(weight) {
//     document.getElementById("submit").style.fontWeight = weight;
// };