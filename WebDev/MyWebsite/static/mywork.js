// Uses jQuery to dynamically load the pages.

$(function () {
    $(".intro").hide().fadeIn(1000);
    $(".networking").hide().fadeIn(1100);
    $(".statement").hide().fadeIn(1700);


});
/* 
*****************************************************************************************
* I am leaving the Vanilla JavaScript down below as I will use it as a future reference *
* for upcoming web development projects                                                 *
*****************************************************************************************
*/

// some vanilla Javascript
let thePopup = document.getElementById("popup-image");
let closeButton = document.getElementById("close-image");
let theBody = document.querySelector("body");

// Pure JavaScript for fading in
function fadingIn(el) {
    let i = 0;
    let change = window.setInterval( () => {
        if (i >= 10) {
            clearInterval(change);
            el.style.opacity = 1;
        } else {
            el.style.opacity = i/10;
            i++;
        }
    }, 50)
};
// This is the fading out function that I have made using pure JavaScript
function fadingOut(el) {
    let i = 10;
    el.style.opacity = 1;
    let change = window.setInterval( () => {
        if (i <= 0) {
            clearInterval(change);
            el.style.opacity = 0;
        } else {
            el.style.opacity = i / 10;
            i = (i - 1);
        }
    }, 50 )
}

/* Added the event listener to the body due to event delegation and it
will make the site slower if I add an event to every single image
element*/
theBody.addEventListener('click', (event) => {
    // This event only reacts if you click on an image
    if(event.target.localName == "img" && event.target.classList.contains("image-clicked") == false) {
        let image = event.target;
        // Makes a clone of the original image element
        let imageClone = image.cloneNode();
        // Set up the class of the image and add it to the popup background
        imageClone.setAttribute("class", "image-clicked");
        thePopup.style.display = "flex";
        fadingIn(thePopup);
        imageClone.style.width = "80%";
        imageClone.style.overflowX = "scroll";
        thePopup.appendChild(imageClone);
        // This creates and styles the caption below the fullscreen image
        let caption = document.createElement("p");
        caption.setAttribute("class", "paragraph");
        caption.setAttribute("id", "caption");
        caption.style.textAlign = "center";
        caption.style.marginTop = "10px";
        caption.textContent = imageClone.alt;
        thePopup.appendChild(caption);
    }
}, false);
closeButton.addEventListener("click", () => {
    let theImage = document.querySelector(".image-clicked");
    let theCaption = document.getElementById("caption");
    // This removes the image and the caption
    fadingOut(theCaption);
    fadingOut(theImage);
    fadingOut(thePopup);
    // This set timeout function gives the fading out some time to work
    setTimeout(function() {
        theImage.remove();
        theCaption.remove();
        thePopup.style.display = "none"
    }, 600);
}, false);