//Gives an alert when the user plans on logging out
function logoutAlert() {
    alert("Are you sure you want to logout? Press 'OK' to continue.");
}

//using jQuery to make some fade/slide animations to be more dynamic
$(function() {
    $("header").hide().fadeIn(500);
    $(".title").hide().fadeIn(500);
    $(".content").hide().slideDown(800);
    
    //popup screen for the notes page
    $(".popup-screen").hide().fadeIn(1700);
    $(".popup-content").hide().fadeIn(1800);

    //popup for the register page
    $('#signup-popup1').hide().fadeIn(1700);
    $('#signup-popup2').hide().fadeIn(1800);

    //logout event
    $("#menu2").on('click', event => {
        if (event.target.className == 'logout') {
            logoutAlert;
        }
    });
});
