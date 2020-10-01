//This is to validate the password entry for a registering user
$(function() {
    $("#signup-submit").on("click", function(){
        let formValid = true;
        let validUser = true;
        let validPassword = true;
        let inputUsername = $("#user").val();
        let inputPassword = $("#passwd").val();
        //counts the number of uppercase letters
        let upperCaseCount = 0;
        //special characters to make password more secure
        let chars = ["!", "?", "$", "@", "%", "^", "&"];
        let charsCount = 0;
        let numberCount = 0;

        if (inputUsername.length == 0) {
            validUser = false;
            $("#userError").removeClass("hidden");
        } else {
            $("#userError").addClass("hidden");
            validUser = true;
        }
        //made some loops to look for capital letters or special characters
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
        } else {
            ("#passwordError").addClass("hidden2");
            validPassword = true;
        }
        formValid = (validUser && validPassword);
        return formValid;
    });
});