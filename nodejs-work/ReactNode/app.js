// Setup the constants
const cors = require('cors');
const mariadb = require('mysql');
const prompt = require('prompt-sync')(); //this module takes in user input (used to enter in password)
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 8800;

let passwd = prompt("Enter your password: ");

//set up the database connection

var connection = mariadb.createConnection( {
    host: '172.17.0.2',
    user: 'asoebube',
    password: passwd,
    database: 'Cars',
    connectionLimit: 10
} );
connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to database!!");
});

//use this to access the static files
app.use(express.static(path.join(__dirname, 'public')));

//use this to use CORS
// let corsLink = {origin: "http://localhost:8800"}
app.use(cors());

//view engine for the EJS files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/table', (req, res) => {
    connection.query("select * from LuxuryCars", (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            res.send(rows);
        }
    });
app.get('/mytable', (req, res) => {
    res.render('table');
})
});

app.listen(port, () => console.log("The server is listening on port 8800!"));