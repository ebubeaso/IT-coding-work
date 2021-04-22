'use strict';

/*
This is the backend server application that will connect to the MariaDB database to get 
the data from the Profanity table
*/

// setup the constants
const mariadb = require('mysql');
const cors = require('cors');
const thePrompt = require("prompt-sync")();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
// use cors to allow the frontend to connect to the backend code
app.use(cors());

// ask for the IP address of the database and the password
let ip = thePrompt("Enter the IP address of the DB server: ");
let passwd = thePrompt("Enter in your password: ")

//connect to the database
var dbConnection;

function makeConnection() {
    dbConnection = mariadb.createConnection({
        host: ip,
        user: 'asoebube',
        password: passwd,
        database: "Hooligan",
        connectionLimit: 10
    });
    dbConnection.connect(err => {
        if (err) throw err;
        console.log("The backend connected to the database");
    });
};

// set up the routes
app.get('/', (req, res) => {
    return res.send("This is the root path, the Node backend is working!");
});

app.get('/profanity', (req, res) => {
    makeConnection();
    dbConnection.query("select * from Profanity", (err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
    // closes the DB connection
    dbConnection.end();
});

app.listen(9900, '0.0.0.0', err => {
    if (err) throw err;
    console.log("The backend is listening for connections!!")
})