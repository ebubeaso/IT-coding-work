//change the color of the day panels (similar to code used in FormPage1)
function changeColor() {
    document.getElementById(arguments[1]).style.backgroundColor = arguments[0];
};


//event listeners for the to do page
let day1 = document.getElementById("day1");
day1.addEventListener("mouseover", function() {
    changeColor('green', 'day1');
}, false);
day1.addEventListener('mouseout', function() {
    changeColor('cadetblue', 'day1');
}, false);

let day2 = document.getElementById("day2");
day2.addEventListener("mouseover", function() {
    changeColor('green', 'day2');
}, false);
day2.addEventListener('mouseout', function() {
    changeColor('cadetblue', 'day2');
}, false);

let day3 = document.getElementById("day3");
day3.addEventListener("mouseover", function() {
    changeColor('green', 'day3');
}, false);
day3.addEventListener('mouseout', function() {
    changeColor('cadetblue', 'day3');
}, false);

let day4 = document.getElementById("day4");
day4.addEventListener("mouseover", function() {
    changeColor('green', 'day4');
}, false);
day4.addEventListener('mouseout', function() {
    changeColor('cadetblue', 'day4');
}, false);

let day5 = document.getElementById("day5");
day5.addEventListener("mouseover", function() {
    changeColor('green', 'day5');
}, false);
day5.addEventListener('mouseout', function() {
    changeColor('cadetblue', 'day5');
}, false);

let day6 = document.getElementById("day6");
day6.addEventListener("mouseover", function() {
    changeColor('green', 'day6');
}, false);
day6.addEventListener('mouseout', function() {
    changeColor('cadetblue', 'day6');
}, false);

let day7 = document.getElementById("day7");
day7.addEventListener("mouseover", function() {
    changeColor('green', 'day7');
}, false);
day7.addEventListener('mouseout', function() {
    changeColor('cadetblue', 'day7');
}, false);