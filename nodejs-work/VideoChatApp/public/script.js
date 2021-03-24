// this JavaScript file is going to make the socket.io connection
const socket = io('/');
console.log(ROOM_ID);
let uid = Math.floor(Math.random() * (99999 - 10000) + 10000);
socket.emit("join-room", ROOM_ID, uid);

// get the video grid
const videoGrid = document.getElementById("video-grid");
// create a new video element
var chatVideo = document.createElement("video");
chatVideo.muted = "true";
// connect to video
navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then(stream => {
    setVideoStream(chatVideo, stream);

    // to connect to other users in the room
    socket.on('user-connected', user => {
        connectedToNe;
    });
});

// function for to use the video stream
function setVideoStream(vid, stream) {
    vid.srcObject = stream; //This will allow us to play the video
    vid.addEventListener('loadedmetadata', () => {
        /* This event listener waits for the video metadata to load
        and then it will play the video on the screen */
        vid.play();
    });
    // add this video to the video grid
    videoGrid.append(vid);

}