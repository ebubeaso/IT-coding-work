$(function () {
    //dynamically load the page
    $(".popup-achievements").hide(); //We want to hide this popup for the zoomed in images
    $(".about-me").hide().fadeIn(700);
    $(".content").hide().fadeIn(1800);
    $(".achievements").hide();
    window.addEventListener('scroll', function() {
        $(".achievements").fadeIn(1000);
    });
});

// some vanilla JavaScript
let achievements = document.getElementById("my-achievements");
let popup = document.getElementById("about-popup");
let closePopup = document.getElementById("close-achievements");
if (window.innerWidth <= 800) {
    closePopup.textContent = "  X  ";
}

// Event that fires when an achievement image is clicked
achievements.addEventListener("click", (event) => {
    if (event.target.classList.contains("pic") && event.target.classList.contains("image-clicked") == false){
        let image = event.target;
        popup.style.display = "flex";
        fadingIn(popup);
        //make the image clone and setup its CSS styling
        let clone = image.cloneNode();
        popup.style.display = "flex";
        clone.setAttribute("class", "image-clicked");
        if(window.innerWidth <= 800) {
            clone.style.width = "80%";
        } else {
            clone.style.width = "50%";
        }
        clone.style.overflowX = "scroll";
        popup.appendChild(clone);
        // setup the caption that will go below the image
        let caption = document.createElement("p");
        caption.setAttribute("class", "paragraph");
        caption.setAttribute("id", "image-caption");
        caption.style.textAlign = "center";
        caption.style.marginTop = "15px";
        caption.textContent = event.target.alt;
        popup.appendChild(caption);
    }
}, false);

// Event is fired when the close button is clicked
closePopup.addEventListener("click", () => {
    let theImage = document.querySelector(".image-clicked");
    let theCaption = document.getElementById("image-caption");
    fadingOut(theImage);
    fadingOut(theCaption);
    fadingOut(popup);
    setTimeout( () => {
        theImage.remove();
        theCaption.remove();
        popup.style.display = "none";
    }, 600 );
}, false);