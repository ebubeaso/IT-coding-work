/* This was initially left in the mywork.js file, but I also wanted to use this function in the 
JavaScript code for my aboutMe.js file. Thus, I put these two custom fade functions into a separate 
file and I made sure that this file is loaded before the other JavaScript files at the bottom of 
each HTML page so that it can be imported properly */

// Pure JavaScript for fading in
function fadingIn(el) {
    let i = 0;
    el.style.opacity = 0;
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