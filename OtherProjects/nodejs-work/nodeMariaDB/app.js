// working with Node JS, I am going to connect it to my MariaDB database and make a CRUP API application 
// to maanage the data on it

//make the constants for the modules
const mariadb = require('mysql');
const prompt = require('prompt-sync')(); //this module takes in user input (used to enter in password)
const express = require('express');
const bodyParser = require('body-parser');

//prompt to ask the user for their password
let yourPassword = prompt('Enter your password: ');

//setup database connection
const dbConnection = mariadb.createConnection( {
    host: '172.17.0.2',
    user: 'ebubeaso',
    password: yourPassword,
    database: 'Cars',
    connectionLimit: 7
});
dbConnection.connect(error => {
    if (error) throw error;
    console.log('Successfully connected to database');
});
module.exports = dbConnection; //exports the variable to be used globally

//make the web server
const app = express();
const port = 8001;

app.use(bodyParser.json()) //used for parsing requests in JSON format

//make the CRUD API routes (GET, POST, PUT, DELETE)
app.get('/', (req, res) => {
    let result = `Welcome to my NodeJS API! This is my first CRUD API using
    Node.js and I look forward to comparing this to Python Flask to see which
    one is lowkey better.`
    return res.json({result})
});
//get all the data
app.get('/cars', (req, res) => {
    dbConnection.query('select * from LuxuryCars', (err, rows) => {
        if (err) {console.log(err);}
        else {return res.json(rows);}
    })
});
//add in a new entry
app.post('/cars', (req, res) => {
    let sqlPost = `insert into LuxuryCars (Brand, Model, Year, isAutomatic) values (?, ?, ?, ?)`;
    dbConnection.query(sqlPost, [req.body.Brand, req.body.Model, 
        req.body.Year, req.body.isAutomatic], err => {
            if (err) {console.log(err);}
            else {res.json('New entry has been added!');}
        })
}); 
//get a car by its specific id
app.get('/cars/:id', (req, res) => {
    let sqlGet = 'select * from LuxuryCars where id = ?';
    dbConnection.query(sqlGet,[req.params.id], (err, rows) => {
        if (err) {console.log(err);}
        else {return res.json(rows);}
    })
});
//update a data entry
app.put('/cars/:id', (req, res) => {
    let sqlPut = `update LuxuryCars set Brand=?, Model=?, Year=?,
    isAutomatic=? where id = ?`;
    dbConnection.query(sqlPut,[req.body.Brand, req.body.Model, 
        req.body.Year, req.body.isAutomatic, req.params.id], err => {
            if (err) {console.log(err);}
            else {res.json('The entry has been updated!');}
        })
});
//delete a data entry
app.delete('/cars/:id', (req, res) => {
    let sqlDelete = 'delete from LuxuryCars where id = ?';
    dbConnection.query(sqlDelete, [req.params.id], err => {
        if (err) {console.log(err);}
        else {res.json('The entry has been successfully deleted');}
    })
});

app.listen(port, () => console.log('Express server is running on port '+ port));