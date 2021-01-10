var changeDirection1;
var changeDirection2;
var changeDirection3;
var changeDirection4;
var changeDirection5;
var changeDirection6;
var changeDirection7;

function setup() {
    createCanvas(displayWidth, displayHeight);
    background(0);
    changeDirection1 = false;
    changeDirection2 = false;
    changeDirection3 = false;
    changeDirection4 = false;
    changeDirection5 = false;
    changeDirection6 = false;
    changeDirection7 = false;
    //createElement('h1', 'JE T\'ADORE MON AMOUR!')
}

//draw a heart
function heart(x, y, size) {
    beginShape();
    vertex(x, y);
    bezierVertex( x - size/2, y - size/2, x - size, y + size/3, x, y + size);
    bezierVertex(x + size, y + size/3, x + size/2, y - size/2, x, y);
    endShape(CLOSE);
}
var cx1 = 110; //circle 1
var cy1 = 90; //circle 1
var cx2 = 410; //circle 2
var cy2 = 190; //circle 2
var cx3 = 970; //circle 3
var cy3 = 270; //circle 3
var cx4 = 110; //circle 4
var cy4 = 390; //circle 4
var cx5 = 990; //circle 5
var cy5 = 80; //circle 5
var hx1 = 120; //heart 1
var hy1 = 230; //heart 1
var hx2 = 950; //heart 2
var hy2 = 330; //heart 2

draw = function() {
    background(0, 0, 0);
    fill(255, 0, 0, 170);
    heart(hx1, hy1, 90); // first heart

    fill(250, 110, 150, 170);
    heart(hx2*1.2, hy2, 80); // second heart

    fill(255, 0, 0, 170);
    heart(windowWidth-170, 30, 90); // third heart
    
    fill(250, 110, 150, 170);
    heart(60, 30, 80); // fourth heart

    fill(250, 110, 150, 170);
    heart(60, 390, 70); // fifth heart

    fill(0, 0, 255, 170);
    heart(displayWidth-160, 200, 70); // sixth heart

    //background(0);
    fill(240, 140, 160, 170); 
    ellipse(cx1, cy1, 150, 150); //first red circle

    fill(240, 14, 160, 170); 
    ellipse(cx2, cy2, 100, 100); //second circle, purple

    fill(240, 14, 0, 170); 
    ellipse(cx3, cy3, 50, 50); //third circle, red

    fill(0, 14, 220, 170); 
    ellipse(cx4, cy4, 70, 70); //fourth circle, blue

    fill(250, 1, 240, 170); 
    ellipse(cx5, cy5, 100, 100); // fifth circle, purple

    fill('pink');
    textSize(100);
    text('I LOVE YOU!!', displayWidth/4, 90);

    fill('red');
    textSize(26);
    text('You are an amazing woman to me and', (displayWidth/4), 175);

    fill('red');
    textSize(26);
    text('I am very grateful to have you in my life. You are', 
    (displayWidth/4), 200);
    
    fill('red');
    textSize(26);
    text('awesome and I love you so much! You help me become a', 
    (displayWidth/4), 225);

    fill('red');
    textSize(26);
    text('person each day and I am grateful that we emotionally', 
    (displayWidth/4), 250);

    fill('red');
    textSize(26);
    text('support each other. We make an awesome team and I love that!', 
    (displayWidth/4), 275);

    fill('red');
    textSize(26);
    text('I am glad that we are married and you are an amazing wife!!', 
    (displayWidth/4), 300);

    fill('pink');
    textSize(50);
    text('JE T\'ADORE MON AMOUR!', displayWidth/4, 400);
    
    //circle 1 animation
    if (cy1 > 400) {
        changeDirection1 = true;
    }
    else if (cy1 < 90){
        changeDirection1 = false;
    };

    if ((cy1 >= 90 && changeDirection1 == false) || cx1 <= 110) {
        cx1 = cx1 + 0.3;
        cy1 = cy1 + 0.6;
    }
    else if (changeDirection1 == true){
        cx1 = cx1 - 0.3;
        cy1 = cy1 - 0.6;
    };

    //circle 2 animation
    if (cy2 < 5) {
        changeDirection2 = true;
    }
    else if (cy2 >= 190){
        changeDirection2 = false;
    };

    if ((cy2 <= 190 && changeDirection2 == false) || cx2 <= 410) {
        cx2 = cx2 + 0.8;
        cy2 = cy2 - 0.3;
    }
    else if (changeDirection2 == true){
        cx2 = cx2 - 0.8;
        cy2 = cy2 + 0.3;
    }

    //circle 3 animation
    if (cy3 < 20) {
        changeDirection3 = true;
    }
    else if (cy3 >= 270){
        changeDirection3 = false;
    };

    if ((cy3 <= 270 && changeDirection3 == false) || cx3 >= 970) {
        cx3 = cx3 - 0.9;
        cy3 = cy3 - 0.4;
    }
    else if (changeDirection3 == true){
        cx3 = cx3 + 0.9;
        cy3 = cy3 + 0.4;
    };

    //circle 4 animation
    if (cy4 < 190) {
        changeDirection4 = true;
    }
    else if (cy4 >= 390){
        changeDirection4 = false;
    };

    if ((cy4 <= 390 && changeDirection4 == false) || cx4 <= 110) {
        cx4 = cx4 + 1.6;
        cy4 = cy4 - 0.3;
    }
    else if (changeDirection4 == true){
        cx4 = cx4 - 1.6;
        cy4 = cy4 + 0.3;
    }
    //circle 5 animation
    if (cy5 > 400) {
        changeDirection5 = true;
    }
    else if (cy5 <= 80) {
        changeDirection5 = false;
    };
    if ((cy5 >= 80 && changeDirection5 == false) || cx5 >= 1000) {
        cx5 = cx5 - 1.4;
        cy5 = cy5 + 1;
    }
    else if (changeDirection5 == true){
        cx5 = cx5 + 1.4;
        cy5 = cy5 - 1;
    }
    // hx1 += 0.7;
    // hy1 += 0.2;
    // hx2 -= 0.7;
    // hy2 += 0.3;
};