// This JavaScript file is to do some client side validation for my website to ensure that the users
// are putting in valid information to be contacted

let contactValidator = function() {
    let valid = true;
    // The input values
    let fname = document.getElementById("first-name");
    let lname = document.getElementById("last-name");
    let contactEmail = document.getElementById("email");
    // the error values
    let fnameError = document.getElementById("fname-error");
    let lnameError = document.getElementById("lname-error");
    let emailError = document.getElementById("email-error");

    // First name and last name validation
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
    if (contactEmail.value.length == 0 || contactEmail.value.includes('@') == false) {
        emailError.classList.remove("hidden3");
        valid = false;
    } else {
        emailError.classList.add("hidden3");
        valid = true;
    }
    return valid;
};

let theForm = document.getElementById("contact-form");
theForm.addEventListener("submit", contactValidator, false);