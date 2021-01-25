$(function () {
    //dynamically load the page
    $(".about-me").hide().fadeIn(700);
    $(".content").hide().fadeIn(1800);
    $(".achievements").hide();
    window.addEventListener('scroll', function() {
        $(".achievements").fadeIn(1000);
    });
})