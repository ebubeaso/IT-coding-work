//using jQuery to validate that the user input in the correct data
$(document).ready(function() {
    //boolean to ensure that the form is valid
    $("#submit").on("click", function() {
        let validFirstName = true;
        let validLastName = true;
        let validEmail = true;
        //Getting the values of the first name, last name and email to validate
        let fname = $(".form #firstName").val();
        let lname = $(".form #lastName").val();
        let email = $(".form #email").val();
        
        //Check if the first name was added
        if (fname.length == 0) {
            $("#firstNameError").removeClass("hidden");
            validFirstName = false;
        } else {
            $("#firstNameError").addClass("hidden");
            validFirstName = true;
        }
        //Check if the last name was added
        if (lname.length == 0) {
            $("#lastNameError").removeClass("hidden2");
            validLastName = false;
        } else {
            $("#lastNameError").addClass("hidden2");
            validLastName = true;
        }
        //Check if a valid email was added
        if (email.length == 0 || email.search("@") == -1) {
            $("#emailError").removeClass("hidden3");
            validEmail = false;
        } else {
            $("#emailError").addClass("hidden3");
            validEmail = true;
        }
        if (validFirstName && validLastName && validEmail) { 
            alert("Yay your form was submitted!!");
            window.location = "success.html";}
    });

});