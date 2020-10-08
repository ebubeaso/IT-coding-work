$(function() {
    $("#the-background").hide().fadeIn(500);
    $("#page-content").hide().fadeIn(700);

    //show the popup screen
    function showPopup() {
        $("#popup-screen").css("display", "flex").fadeIn(800);
        $("#popup-content").fadeToggle(900);
    };
    function hidePopup() {
        $("#popup-content").fadeToggle(700);
        $("#popup-screen").fadeOut(700);
    };

    $("#the-button").on('click', showPopup);
    $("#close-button").on('click', hidePopup);

    //handling the slide animation (make all my variables)
    let width = 250;
    let animateSpeed = 1000;

    let currentImage = 1;
    let $slideShow = $("#the-slides");
    let $image = $slideShow.find(".image");
    let nextButton = $("#next");
    let prevButton = $("#previous");

    //when previous button is clicked
    prevButton.on('click', function() {
        $slideShow.animate({'margin-left': '+='+width}, animateSpeed, function() {
            currentImage -= 1;
            if (currentImage === 0) {
                $slideShow.css('margin-left', -1000);
                currentImage = $image.length;
            }
        });
    });
    //when next button is clicked
    nextButton.on('click', function() {
        $slideShow.animate({"margin-left": '-='+width}, animateSpeed, function() {
            currentImage++;
            if (currentImage === $image.length) {
                $slideShow.css('margin-left', 0);
                currentImage = 1;
            }
        });
    });
});