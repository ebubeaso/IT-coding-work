//using jQuery to validate that the user input in the correct data
$(document).ready(function() {
    $(".theButton #submit").on("click", function() {
        //boolean to ensure that the form is valid
        let validForm = true;
        //Getting the values of the first name, last name and email to validate
        let fname = $(".form #firstName").val();
        let lname = $(".form #lastName").val();
        let email = $(".form #email").val();
        
        //Check if the first name was added
        if (fname.length == 0) {
            $("#firstNameError").removeClass("hidden");
            validForm = false;
        } else {
            $("#firstNameError").addClass("hidden");
            validForm = true;
        }
        //Check if the last name was added
        if (lname.length == 0) {
            $("#lastNameError").removeClass("hidden2");
            validForm = false;
        } else {
            $("#lastNameError").addClass("hidden2");
            validForm = true;
        }
        //Check if a valid email was added
        if (email.length == 0) {
            $("#emailError").removeClass("hidden3");
            validForm = false;
        } else {
            $("#emailError").addClass("hidden3");
            validForm = true;
        }
        if (validForm) { 
            alert("Yay your form was submitted!!");
            window.location = "success.html";
        }
    });

});
