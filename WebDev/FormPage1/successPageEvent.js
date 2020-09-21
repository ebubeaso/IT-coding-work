//event listeners for the success webpage
let goHome = document.getElementById('homeButton');
goHome.addEventListener('mouseover', function() {
    changeColor('white', 'blue', 'homeButton');
}, false);
goHome.addEventListener('mouseout', function() {
    changeColor('black', 'antiquewhite', 'homeButton');
}, false);
goHome.addEventListener('click', backHome, false);