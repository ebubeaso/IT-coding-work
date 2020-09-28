//This JS file will add some dynamic aspects to my Flask app
// uses jQuery to load the web page dynamically
$(function() {
    $("#title").hide().slideDown(700);
    $("#menu").hide().slideDown(800);
    $("h2").hide().fadeIn(2000);
    $(".explanation").hide().fadeIn(2500);
});