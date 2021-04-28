/* This is the backend express app server that will be connecting to the database in
the backend */

// set up the variables
const express = require('express');
const mariadb = require('mariadb');
const prompt = require('prompt-sync')();
const cors = require('cors');
// make the express app
const app = express();
const port = 9900;

// express backend app settings
app.use(cors());
app.use(express.json());

// make the MariaDB connection parameters
const params = {
    host: "10.0.0.192",
    port: 33606,
    user: 'usageapp',
    password: process.env.PI_DB_PASS,
    database: 'DeviceUsage',
    connectionLimit: 5
};

// make the API routes
app.get('/', (req, res) => {
    res.json("Welcome! If you see this message, then the root route is working!");
});

app.get('/usage', (req, res) => {
    console.log("");
    console.log("Request Method: " + req.method + ", Endpoint: /usage");
    console.log("Status: "+ res.statusCode);
    mariadb.createConnection(params)
        .then(connection => {
            connection.query("select * from Xbox;")
                .then(rows => {
                    res.json(rows);
                    connection.end();
                    console.log("DB connection ended");
                }).catch(err => {console.log(err)});
        }).catch(err => {console.log(err)});
});

app.get("/phone", (req, res) => {
    console.log("");
    console.log("Request Method: " + req.method + ", Endpoint: /phone");
    console.log("Status: "+ res.statusCode);
    mariadb.createConnection(params)
            .then(connection => {
                connection.query("select * from PhoneUsage;")
                    .then(rows => {
                        res.json(rows);
                        connection.end();
                        console.log("DB connection ended")
                    }).catch(err => {console.log(err)});
            }).catch(err => {console.log(err)});
});

// start listening for connections
app.listen(port, "0.0.0.0", (err) => {
    if (err) throw err;
    console.log("The app server is now listening for connections!!");
})