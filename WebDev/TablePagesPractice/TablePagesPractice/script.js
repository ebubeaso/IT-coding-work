//this is to add some interactivity

//this is to add a pop up message whenever you want to move to another page
function salesConfirm() {
    let message = "You are going to the sales page. Continue?";
    let redirect = "sales.html";
    if (confirm(message)) {
        window.location = redirect;
    }
    else {
        alert("Action cancelled");
    }
};

/* This function is similar to the one up above, but I made them separate
functions since they will be pointing to different web links */
function weatherConfirm() {
    let message = "You are about to go see the 7-day weather report. Continue?";
    if (confirm(message)) {
        window.location = "weather.html";
    }
    else {
        alert("Action has been cancelled");
    }
};

function home() {
    let confirmation = "This is going back to the homepage. Are you okay with that?";
    if (confirm(confirmation)) {
        window.location = "index.html";
    }
    else {
        alert("Action has been cancelled")
    };
}