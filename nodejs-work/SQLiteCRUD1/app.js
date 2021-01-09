/* 
This is another CRUD API with Node.js. This will allow me to get more familiar with using Node and compare it
to using Python Flask. I would like to learn more about it and I could potentially use Node to make web applications
and APIs that help configure and manage network devices and servers.
*/

//make the constants for the modules
const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const bodyParser = require('body-parser');

// Connect to Database
const db = new sqlite3.Database('./Cars.db', (err) => {
    // Error callback in case if the connection does not work
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
  });
//Setup express web server
//make the web server
const app = express();
const port = 7070;

app.use(bodyParser.json()) //used for parsing requests in JSON format

// Set up the API routes
app.get('/', (req, res) => {
    let result = `Welcome! I am using Node.js again to make APIs again. So far it is becoming more 
    interesting as well as I am learning a lot about using JavaScript. This is a very simple CRUD API
    application that I made for fun just so that I can get used to using Node.js and potentially use
    it for web application projects. Here are the routes:
    
    /cars (GET, POST) ==> gets all the cars from the SQLite table Exotics or it adds a new car to the
    Exotics table
    
    /cars/:id (GET, PUT, DELETE) ==> Gets a specific car by ID, updates a car record, or deletes a car
    record by ID
    
    Enjoy using this CRUD application and its APIs!`;
    return res.json({result});
});

app.get('/cars', (req, res) => {
    db.all('select * from Exotics order by price', (err, rows) => {
        if (err) {
            console.log(err);
            console.log('');
            console.log("Method: GET, /cars, Response: 500");
        }
        else {
            console.log("Method: GET, /cars, Response: 200");
            return res.json(rows);
        }
    });
    //db.close();
});
app.post('/cars', (req, res) => {
    let sql = `INSERT INTO Exotics (id, brand, model, year, isAutomatic, price) 
                values (?, ?, ?, ?, ?, ?)`
    let the_ID = Math.floor(Math.random()*90000) + 10000; //this makes a random 5 digit ID number
    let data = [the_ID, req.body.brand, req.body.model, req.body.year, 
                req.body.isAutomatic, req.body.price];
    db.run(sql, data, (err) => {
        if (err) {
            console.log(err);
            console.log('');
            console.log("Method: POST, /cars, Response: 500");
            return res.json("The data could not be added properly");
        }
        console.log("Method: POST, /cars, Response: 201");
        return res.json("Your data was entered successfully!")
    })
});
app.put('/cars/:id', (req, res) => {
    let sql = `UPDATE Exotics set brand=?, model=?, year=?, isAutomatic=?, price=?
    where id = ?`;
    let data = [req.body.brand, req.body.model, req.body.year,
    req.body.isAutomatic, req.body.price, req.params.id];
    db.run(sql, data, (err) => {
        if (err) {
            console.log(err); 
            console.log('');
            console.log("Method: PUT, /cars/" + data[data.length - 1] + ", Response: 500");
            return res.json("Could not update the data for id " + (data.length -1) )
        }
        console.log("Method: PUT, /cars/" + data[data.length - 1] + ", Response: 200");
        return res.json("update was successful!!")
    })
});
app.get('/cars/:id', (req, res) => {
    let sql = `SELECT * FROM Exotics where id = ?`;
    db.get(sql, [req.params.id], (err, row) => {
        if (err) {
            console.log(err);
            console.log('');
            console.log("Method: GET, /cars/" + req.params.id + ", Response: 500");
        }
        else {console.log("Method: GET, /cars/" + req.params.id + ", Response: 200"); return res.json(row);}
    })
});
app.delete('/cars/:id', (req, res) => {
    let sql = `DELETE FROM Exotics where id = ?`;
    db.run(sql, [req.params.id], (err) => {
        if (err) {
            console.log(err);
            console.log('');
            console.log("Method: DELETE, /cars/" + req.params.id + ", Response: 500");
        }
        else {
            console.log("Method: DELETE, /cars/" + req.params.id + ", Response: 204"); 
            return res.json("ID "+ req.params.id + " was deleted.")}
    })
});

// Lets the server listen for connections
app.listen(port, () => {
    console.log('');
    console.log('The Node.js server is running and listening on port '+ port);
    console.log('');
    console.log('You can connect to the server via localhost or on the LAN on another computer');
});