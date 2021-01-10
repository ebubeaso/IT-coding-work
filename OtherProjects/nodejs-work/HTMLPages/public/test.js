// using jQuery code here:

$(function() {
    $(".title").hide().fadeIn(700);
    $(".subtitle").hide().fadeIn(900);
    $("p").hide().fadeIn(1200);
    $("b").hide().fadeIn(1200);
    $(".website").hide().fadeIn(1200);
});

let button = document.getElementById('the-button');
button.addEventListener('click', function () {
    console.log('the button has been clicked');
}, false);