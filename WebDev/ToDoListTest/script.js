//loading the page dynamically
$(document).ready(function() {
    $(".title").hide().slideDown(400);
    $(".page-content").hide().fadeIn(1000);
});

//change the color of the day panels (similar to code used in FormPage1)
function changeColor() {
    document.getElementById(arguments[1]).style.backgroundColor = arguments[0];
};

//handle the drop down of each task
$(function() {
    //hides the first panel on to-do list that has classes hidden and active
    $(".day-panels .hidden.active").hide();
    $(".day-panels .tabs li").on('click', function(){
        /* This line helps you determine which day you have picked by looking
        at the rel attribute, you can also use data- to get the attribute of
        a HTML element which links to the id of the element*/
        var panelShow = $(this).attr("rel");

        /*This gets the panel that has the hidden & active class will slide up 
        to hide for now selecting the panel that has the .hidden.active class 
        inside the .day-panels class, which the div is using*/
        $(".day-panels .hidden.active").slideUp(400, nextPanel);
        
        function nextPanel() {
            //removes the active class from the current panel
            $(this).removeClass('active');

            /* Get the id of the panel that you have clicked. It removes allows
            the panel to slide down once it was clicked*/
            $('#'+panelShow).slideDown(300, function() {

                /* This refers to the li that got clicked and adds an active 
                class so that the li that got clicked will be shown*/
                $(this).addClass('active');
                // changes color so user can see selected day
                $(".day-panel .tab li").css("color", "orange");
            });
        }

    }); 
});