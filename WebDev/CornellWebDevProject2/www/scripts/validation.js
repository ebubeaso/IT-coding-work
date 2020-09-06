$(document).ready(function() {
  $("#yourInfo").on("submit", function() {

    //True when the form is valid
    var formValid = true;

    //variable for if the name input is valid
    var validName = $("#yourName").prop("validity").valid;
    if(validName) {
      $("#yourNameError").addClass("hidden");
    }
    else {
    formValid = false;
    $("#yourNameError").removeClass("hidden");
    }

    //variable for valid Email
    var validEmail = $("#yourEmail").prop("validity").valid;
    if(validEmail) {
      $("#yourEmailError").addClass("hidden1");
    }
    else {
    formValid = false;
    $("#yourEmailError").removeClass("hidden1");
    }

    //for choosing an Age
    var validAge = $("#userAge").prop("validity").valid;
    if(validAge) {
      $("#yourAgeError").addClass("hidden2");
    }
    else {
    formValid = false;
    $("#yourAgeError").removeClass("hidden2");
    }

    //For choosing an option for receiving messages
    if (jQuery('#yourInfo input[type=radio]:checked').length){
      $("#messageError").addClass("hidden3");
    } else {
      formValid = false;
      $("#messageError").removeClass("hidden3");
    }
  return formValid;
  });
});
