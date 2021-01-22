// Setup the constants
const express = require('express');
const path = require('path');
const webapp = express();
const port = 8800;
//Setup the view engine

//use this to access the static files
webapp.use(express.static(path.join(__dirname, 'public')));
//view engine for the EJS files
webapp.set('views', path.join(__dirname, 'views'));
webapp.set('view engine', 'ejs');

webapp.get('/', (req, res) => {
    res.render('index');
})