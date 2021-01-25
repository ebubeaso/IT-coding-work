$(function () {
    //dynamically load the page
    $(".about-me").hide().fadeIn(1700);
    $(".content").hide().fadeIn(3000);
    $(".achievements").hide();
    window.addEventListener('scroll', function() {
        $(".achievements").fadeIn(1000);
    });
})