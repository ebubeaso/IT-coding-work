//This is to validate the password entry for a registering user
$(function() {
    $("#signup-submit").on("click", function(){
        let formValid;
        let validUser;
        let validPassword;
        let inputUsername = $("#user").val();
        let inputPassword = $("#passwd").val();
        let passwordRetyped = $("#passwd-retype").val();
        
        //counts the number of uppercase letters
        let upperCaseCount = 0;
        //special characters to make password more secure
        let chars = ["!", "?", "$", "@", "%", "^", "&"];
        let charsCount = 0;
        //counts how many numbers are in the password
        let numberCount = 0;

        function checkUsername() {
            if (inputUsername.length == 0) {
                validUser = false;
                $("#userError").removeClass("hidden");
            } else {
                $("#userError").addClass("hidden");
                validUser = true;
            }
            return validUser;
        };
        //made some loops to look for capital letters or special characters
        function checkPassword() {
            for (let i=0; i <= inputPassword.length; i++) {
                let letter = inputPassword.charAt(i);
                let character = inputPassword.charAt(i);
                let number = inputPassword.charAt(i);
                if (letter == letter.toUpperCase()) {
                    upperCaseCount++;
                }
                if(isNaN(parseInt(number)) == false) {
                    numberCount++;
                }
                if (chars.includes(character)) {
                    charsCount++;
                }
            };
            if (inputPassword.length < 8 || upperCaseCount == 0 || numberCount == 0 || charsCount == 0) {
                validPassword = false;
                $("#passwordError").removeClass("hidden2");
            }
            else if (inputPassword != passwordRetyped) {
                validPassword = false;
                $("#retypeError").removeClass("hidden3");
            } else {
                $("#passwordError").addClass("hidden2");
                validPassword = true;
            }
            return validPassword;
        };
        let userValid = checkUsername();
        let passwdValid = checkPassword();
        if (userValid == false || passwdValid == false) {
            formValid = false;
            return formValid;
        } else {
            formValid == true;
            return formValid;
        }
    });
});