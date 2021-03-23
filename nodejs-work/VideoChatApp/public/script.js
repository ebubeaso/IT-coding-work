"use strict";
// this JavaScript file is going to make the socket.io connection

const socket = io('/');
console.log(ROOM_ID);
let uid = Math.floor(Math.random() * (99999 - 10000) + 10000);
socket.emit("join-room", ROOM_ID, uid);

// listen to user-connected event from the websockets server
socket.on('user-connected', (user) => {
    console.log("user is now connected " + user);
})