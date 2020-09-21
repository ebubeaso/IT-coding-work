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

//using jQuery to validate that the user input in the correct data
function submitInfo() {
    $(document).ready(function() {
        //left as true if the form is filled out correctly
        $(".theButton #submit").on("click", function() {
            let validForm = true;

            //checks if the first names and lastnames are valid
            let validFname = (".form #firstName").prop("validity").valid;
            if (validFname) {
                $("#firstNameError").addClass("hidden");
                alert("Your form has been submitted!!");
                window.location = "success.html";
            }
            else {
                validForm = false;
                $("firstNameError").removeClass("hidden");
            }
        return validForm;
        });

    });
};

function changeColor() {
    document.getElementById(arguments[2]).style.color = arguments[0];
    document.getElementById(arguments[2]).style.backgroundColor = arguments[1];
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
submitButton.addEventListener('click', submitInfo, false);