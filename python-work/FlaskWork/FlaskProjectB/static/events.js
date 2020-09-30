//This JS file will add some dynamic aspects to my Flask app
// uses jQuery to load the web page dynamically
$(function() {
    $("#title").hide().slideDown(700);
    $("#menu").hide().slideDown(800);
    $("#menu2").hide().slideDown(800);
    $("header").hide().fadeIn(600);
    $(".content").hide().slideDown(700);
    $("h2").hide().fadeIn(2000);
    $(".explanation").hide().fadeIn(2500);
    $("#token").hide().fadeIn(2500);
    $("form").hide().slideDown(800);

    //handling the interactivity of showing and hiding the search table
    $(".search-button").on('click', function() {
        $("#employee-table").fadeToggle(1000);
    });

    //handling interactivity with the popup screens
    
    //This is for the register webpage:
    $("#register").on('click', function() {

        $(".popup-screen").css("display", "flex").fadeIn(1000);
        $(".popup-content").fadeToggle(1000);
    })
    $("#close-popup").on('click', function() {
        $(".popup-content").fadeToggle(1000);
        $(".popup-screen").fadeOut(1000).css("display", "none");
    });
});
