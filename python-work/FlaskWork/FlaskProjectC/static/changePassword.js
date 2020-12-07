// reusing the function for checkPassword and confirmPassword in validate.js for client side form validation

/* This JavaScript file will take advantage of the XMLHttpRequest object 
to send a PUT request to the database to make the updated password change */
let url = '';
let form = document.getElementById("change-password");
function updatePassword(u) {
    let xml = new XMLHttpRequest();
    xml.open('PUT', u, true);
    let theForm = new FormData(form);
    xml.send(theForm);
};

// the jQuery code
$(function() {
    // get the values of the new password and retyped password to validate below
    let newPassword;
    let passwordRetyped;
    let passwordError;
    let retypeError;

    // validate the new password
    function validatePassword() {
        newPassword = $("#new-password").val();
        passwordError = $("#new-password-error");
        let validPassword = true;
        //setting up my counters
        let upperCaseCount = 0;
        let numberCount = 0;
        let specialChars = ["!", "?", "$", "@", "%", "^", "&"];
        let specialCharsCount = 0;
        
        for (let i=0; i <= newPassword.length; i++) {
            let index = newPassword.charAt(i);
            let letter = index;
            let character = index;
            let number = index;
            //check number of uppercase letters
            if (letter == letter.toUpperCase()) {
                upperCaseCount++;
            }
            //check number of number characters (using isNaN & parseInt)
            if (isNaN(parseInt(number)) == false) {
                numberCount++;
            }
            //check number of special characters (using includes instead of for loop)
            //using includes method is much faster than using another loop
            if(specialChars.includes(character)) {
                specialCharsCount++;
            }
        }
        console.log('uppercases', upperCaseCount);
        console.log('numbers', numberCount);
        console.log('special', specialCharsCount);
        //check the password criteria
        if (newPassword.length < 8) {
            validPassword = false;
            passwordError.removeClass("hide-error-password");
        }
        else if (upperCaseCount == 0 || numberCount == 0 || specialCharsCount == 0) {
            validPassword = false;
            passwordError.removeClass("hide-error-password");
        }
        else {
            passwordError.addClass("hide-error-password");
            validPassword = true;
        }
        console.log(validPassword, "new password")
        return validPassword;
    }
    function confirmPassword() {
        //validate the retyped password
        passwordRetyped = $("#new-password-retyped").val();
        retypeError = $("#retype-new-error");
        let validRetype = true;
        if (passwordRetyped != newPassword) {
            validRetype = false;
            retypeError.removeClass("hide-retype-error");
        } else {
            retypeError.addClass("hide-retype-error");
            validRetype = true;
        }
        console.log(validRetype, "confirm Password");
        return validRetype;
    };

    let updateForm = $("#change-password");
    updateForm.on('submit', (event) => {
        let passwd = validatePassword();
        console.log(passwd, 'passwd');
        let retype = confirmPassword();
        console.log(retype, 'retype');
        if (passwd == true && retype == true) {
            url = window.location.href;
            updatePassword(url);
            event.preventDefault()
            alert('Your password has been updated to your new one!');
            window.location = "/";
        } else {
            alert('Your update has failed!!')
            return false;
        };
    })
})