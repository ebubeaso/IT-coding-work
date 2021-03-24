'use strict';
// This is the server backend for the chat application
const os = require("os");
const express = require("express");
const http = require("http");
const theSocket = require("socket.io");
const bodyParser = require("body-parser");
const path = require("path");
const port = 9900;
const { v4: uuidV4 } = require("uuid");
// This is going to verify the room access key
const crypto = require("crypto");
const fs = require("fs");

const app = express();
// this pulls in the hashed version of the secret phrase to use for the room
const secretWord = fs.readFileSync("./encryptedAccess.txt", {encoding: "utf-8"});
/* 
The reason why I use a substring for the access key is because when readFileSync pulls
in the hashed text from the text file, it would add in an extra space (new line character)
which adds an extra character to it. When I am comparing this hash string to the hashed input
of the user, it is going to see if it strictly matches this hash string, and the only way to 
ensure that the user input's hash, which is the correct one, is accepted is if the hash string 
below gets rid of the extra character space
*/
let accessKey = secretWord.substring(0, (secretWord.length - 1))

// process URL-encoded bodies, like HTML forms
app.use(bodyParser.urlencoded({extended: true}));
//render the static files
app.use(express.static(path.join(__dirname, "public")));
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// setup the API route
app.get("/", (req, res) => {
    res.render("index");
});

app.post("/", (req, res) => {
    let input = req.body["room-input"];
    let hashed = crypto.createHash("sha256").update(input).digest("hex");
    if (hashed.normalize() == accessKey.normalize()) {
        res.redirect(`/${uuidV4()}`)
    } else {
        res.send("You did not enter in the valid room code");
    }
})

// the Room route (sets up a room by its room ID)
app.get("/:room", (req, res) => {
    res.render("room", { roomID: req.params.room })
})

// make the http server and have it fall in line with express
var server = http.createServer(app);
server.listen(port, "0.0.0.0", (error) => {
    if (error) throw error;
    console.log("The chat server is now online!");
});

// start up socket.io for websocket connection
var io = theSocket(server);

// handles when a user connects to the websocket chat server
io.on("connection", (socket) => {
    // runs this code when someone connects to the server
    socket.on("join-room", (roomID, user) => {
        // pass the room ID and user ID to the client
        // This makes the client join the room
        socket.join(roomID);
        socket.broadcast.emit('user-connected', user); //send a message to the room (broadcast)
    })
})
