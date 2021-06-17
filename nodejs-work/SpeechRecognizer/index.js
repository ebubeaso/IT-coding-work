// set up the constants for this express server
const express = require("express");
const cors = require("cors");
const port = 5000;
const app = express();

// make the middleware
app.use(express.json());
app.use(express.static("public"));
app.use(cors());
// set the view engine to ejs
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
})

app.listen(port, "0.0.0.0", (err) => {
    if (err) throw err;
    console.log("The Express App server is listening on port " + port);
})