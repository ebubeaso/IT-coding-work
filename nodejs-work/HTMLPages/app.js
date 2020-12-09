// This is a node js web page that will render a HTML page as well as a web page with CSS and client side JS file

// The constanst for the web server
const express = require('express');
const app = express();
const path = require('path');
const port = 9900;

// For static files
app.use('/webpage', express.static('public'));
app.use(express.static('public'));
// Rendering the Home page HTML
app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html');
});
// The HTML page with CSS and client side JavaScript
app.get('/webpage', (req, res) => {
    res.sendFile(__dirname+'/webpage.html');
});

// start the Express node server
app.listen(port, () => {
    console.log('');
    console.log('The Node js web server is listening on port '+ port);
    console.log('');
    console.log('You can connect to the server via localhost or on the LAN on another computer');
})