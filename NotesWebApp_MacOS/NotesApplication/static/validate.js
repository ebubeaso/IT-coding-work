/* This is for client side form validation. In this, we want to verify that the
user enters in the username and password correctly. If the username input field
is empty, you will show the error message that will prompt the user to add in a
username. As for the password, this validation script checks for several things:
    - if the password has at least one capital letter
    - if the password has at least one number
    - if the password has a special character
    - if the password and retype password fields match */

$(function() {    
    //attempt to submit form
    $("#register-form").on('submit', function(e) {
        // Our booleans
        let validForm = true;
        let validUsername;
        let validPassword;
        let validRetype;
        //our input values
        let yourName = $("#new-user").val();
        let yourPassword = $("#register-password").val();
        let passwordRetyped = $("#password-retyped").val();
        // Our error values
        let usernameError = $("#name-error");
        let passwordError = $("#password-error");
        let retypeError = $("#retype-error");
        
        // validate the username
        function checkUsername(){ 
            if (yourName.length == 0) {
                validUsername = false;
                usernameError.removeClass("hide-error-username");  
            } else {
                usernameError.addClass("hide-error-username");
                validUsername = true;
            }
            return validUsername;
        };
        // validate the password
        function checkPassword() { //using this function in changePassword.js (which is why I put export default)
            //setting up my counters
            let upperCaseCount = 0;
            let numberCount = 0;
            let specialChars = ["!", "?", "$", "@", "%", "^", "&"];
            let specialCharsCount = 0;
            
            for (let i=0; i <= yourPassword.length; i++) {
                let index = yourPassword.charAt(i);
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
            };
            //check the password criteria
            if (yourPassword.length < 8) {
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
            return validPassword;
        };

        function confirmPassword() {
            //validate the retyped password
            if (passwordRetyped != yourPassword) {
                validRetype = false;
                retypeError.removeClass("hide-error-retype");
            } else {
                retypeError.addClass("hide-error-retype");
                validRetype = true;
            }
            return validRetype;
        };
        usernameValid = checkUsername();
        passwordValid = checkPassword();
        retypeValid = confirmPassword();
        if (usernameValid == false || passwordValid == false || retypeValid == false) {
            validForm = false;
            return validForm;
        } else {
            validForm = true;
            return validForm;
        };
    });
});