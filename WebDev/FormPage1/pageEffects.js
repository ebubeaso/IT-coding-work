//usng some jQuery to load the webpage smoothly.

//This function is to add the jQuery effects onto the home page
$(document).ready(function () {
    $(".JS").hide().slideDown(800);
    $(".jQ").hide().fadeIn(1500);
    $("p").each(function() {
        $(this).hide().fadeIn(1500);
    });
});

//This was the jQuery used to add some effects to the form page
$(document).ready(function () {
    $(".theTitle").hide().slideDown(800);
    $(".form").before($(".theTitle")).hide().fadeIn(2800);
    $(".theButton").before($(".form")).hide().fadeIn(2800);
});