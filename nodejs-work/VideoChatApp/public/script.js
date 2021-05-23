// this JavaScript file is going to make the socket.io connection
const socket = io('/');
console.log(ROOM_ID);

//make the peer (for connecting to the peer server)
const peer = new Peer( undefined, {host: '10.0.0.192', port: 5000, path: "/peerjs"} );
peer.on('open', uid => {
    socket.emit("join-room", ROOM_ID, uid);
    console.log("Entered room!!", ROOM_ID, uid);
});

// make the set of clients connected to the server
const allClients = {};

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

    // Listen to when another user calls in
    peer.on('call', calling => {
        calling.answer(stream); //sends the user their stream
        // get the video from the client you answered
        let peerVideo = document.createElement("video");
        calling.on('stream', userStream => {
            setVideoStream(peerVideo, userStream);
        });
    })

    // connect to other users in room
    socket.on("user-connected", user => {
        alert("User "+ user + " has disconnected");
        console.log("other user: " + user);
        connectNewClient(user, stream);
    });
});

// handle the user disconnect
socket.on("user-disconnected", user => {
    // cleanly disconnects the user of a given user ID
    alert("User "+ user + " has disconnected");
})

// function for to use the video stream
function setVideoStream(vid, stream) {
    vid.srcObject = stream; //This will allow us to play the video
    let startVid = document.getElementById("play");
        startVid.addEventListener('click', () => {
            /* This event listener waits for the video metadata to load
            and then it will play the video on the screen */
            vid.play();
            // add this video to the video grid
            videoGrid.append(vid);
        })
};

// function for connecting users to the stream
function connectNewClient(user, stream) {
    // This sends the other peers your video stream
    const theCall = peer.call(user, stream);
    const clientVideo = document.createElement("video");
    /* Listens for a stream event to occur so that it can add in the 
    client's video and audio stream to the call on the user's page */
    theCall.on('stream', userStream => {
        setVideoStream(clientVideo, userStream)
    })
    theCall.on('close', () => {
        //listens for a close event to remove the client's video from your screen
        clientVideo.remove();
    });
    // add the client to the allClients object to record it
    // allClients[user] = theCall;
}
