// This JavaScript file is to do some client side validation for my website to ensure that the users
// are putting in valid information to be contacted

let contactValidator = function() {
    let valid = true;
    // The input values
    let fname = document.getElementById("first-name");
    let lname = document.getElementById("last-name");
    // the error values
    let fnameError = document.getElementById("fname-error");
    let lnameError = document.getElementById("lname-error");

    if (fname.value.length === 0) {
        fnameError.classList.remove("hidden1");
        valid = false;
    } else {
        fnameError.classList.add("hidden1");
        valid = true;
    }
    if (lname.value.length === 0) {
        lnameError.classList.remove("hidden2");
        valid = false;
    } else {
        lnameError.classList.add("hidden2");
        valid = true;
    }
    // check email validation
    if (checkEmail == false) {
        valid = false;
    } else {
        valid = true;
    }

    return valid;
};

let checkEmail = function() {
    let contactEmail = document.getElementById("email");
    let emailError = document.getElementById("email-error");
    
}

let theForm = document.getElementById("contact-form");
theForm.addEventListener("click", contactValidator, false);