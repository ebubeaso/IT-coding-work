//This JS file will add some dynamic aspects to my Flask app
// uses jQuery to load the web page dynamically
$(function() {
    $("#title").hide().slideDown(700);
    $("#menu").hide().slideDown(800);
    $("#menu2").hide().slideDown(800);
    $("header").hide().fadeIn(600);
    $(".content").hide().slideDown(700);
    $("h2").hide().fadeIn(1000);
    $(".explanation").hide().fadeIn(1500);
    $("#token").hide().fadeIn(1500);
    $("form").hide().slideDown(800);
    $(".popup-screen-search").hide().fadeIn(1800);
    $(".popup-screen-content").hide().slideDown(2000);

    //handling interactivity with the popup screens
    function popupShow() {
        $(".popup-screen").css("display", "flex").fadeIn(700);
        $(".popup-content").fadeToggle(700);
    };
    function popupHide() {
        $(".popup-content").fadeToggle(700);
        $(".popup-screen").fadeOut(700);
    };
    //handling the interactivity of showing and hiding the search table
    $("#search-all").on('click', function() {
        $("#employee-table").fadeToggle(1000);
    });

    //This is for the register webpage:
    $("#register").on('click', popupShow);
    $("#close-popup").on('click', popupHide);
});
