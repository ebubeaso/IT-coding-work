const express = require("express");
const app = express();
const port = 9900;
// setup the middleware
app.use(express.static("public"));
app.set('view engine', 'ejs');
// set the routes
app.get("/", (req, res) => {
    res.render("index");
});
app.listen(port, "0.0.0.0", (err) => {
    if (err) throw err;
    console.log("The app server is listening on port " + port);
})