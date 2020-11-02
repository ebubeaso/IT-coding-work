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
});
