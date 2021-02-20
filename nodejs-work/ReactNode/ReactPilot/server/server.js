// server code
const mariadb = require('mysql');
const prompt = require('prompt-sync')();
const express = require('express');
const cors = require('cors');
const server = express();
const port = 3001;
const bodyParser = require('body-parser');

// ask for the db server IP address
const ipAddress = prompt("Enter the IP address of the DB server: ");
//ask for the password
const passwd = prompt("enter your DB password: ");

//connect to the database
let connection = mariadb.createConnection({
    host: ipAddress,
    user: "asoebube",
    password: passwd,
    database: "Cars",
    connectLimit: 10
});
// connect to database
connection.connect(err => {
    if (err) {throw err;}
    console.log("database connection successful!")
});
//the body parser
server.use(bodyParser.json());
server.use(cors());
//setting up the routes
server.get('/', (req, res) => {
    return res.send("Nodejs is working!!!");
});
server.get('/table', (req, res) => {
    connection.query('select * from LuxuryCars', (err, rows) => {
        if (err) {console.log(err);}
        else {
            res.send(rows);
        }
    });
})

server.listen(port, () => {
    console.log("Running the server on port 3001");
})
