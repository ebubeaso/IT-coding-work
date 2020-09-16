//using jQuery to validate that the user input in the correct data
$(document).ready(function() {
    //left as true if the form is filled out correctly
    $("#submit").on("submit", function() {
        let validForm = true;

        //checks if the first names and lastnames are valid
        let validFname = ("#firstName").prop("validity").valid;
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
