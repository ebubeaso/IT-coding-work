// this is the express backend to use
const express = require("express");
const app = express();
const port = 5500;
const cors = require("cors");
const https = require("https");
const fs = require("fs");
// setup the middleware
app.use(cors());
app.disable('x-powered-by');
app.use(express.static("public"));
app.set('view engine', 'ejs');
// set the routes
app.get("/", (req, res) => {
    res.render("index");
});
// const ssl_params = {
//     key: fs.readFileSync("./ssl/key.pem"),
//     cert: fs.readFileSync("./ssl/cert.pem"),
//     rejectUnauthorized: false
// }
app.listen(port, "0.0.0.0", (err) => {
    if (err) throw err;
    console.log("The app server is listening over HTTPS on port " + port);
})
// const server = https.createServer(ssl_params, app);
// server.listen(port, "0.0.0.0", (err) => {
//     if (err) throw err;
//     console.log("The app server is listening over HTTPS on port " + port);
// })