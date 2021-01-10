//This function is made to slide the images automatically
$(function() {
    let width = 450 //the width of the images
    let animateSpeed = 1000;
    let pause = 3000;
    let currentImage = 1; //represents the first image on the slide
    //Cache the DOM elements
    let $slides = $("#the-slides");
    let $images = $slides.find(".image-slide");

    //using an interval for the transition
    setInterval(function() {
        $slides.animate({'margin-left': '-='+width}, animateSpeed, function() {
            currentImage++;
            if (currentImage === $images.length) {
                $slides.css('margin-left', 0);
                currentImage = 1;
            }
        });
    }, pause);

});