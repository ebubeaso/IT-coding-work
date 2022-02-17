"use strict"
// This is one of my backend servers
const express = require("express");
const port = 7777
const cors = require("cors");
const helmet = require("helmet");
const app = express();
const api = require("./routes");
// middleware
app.use(cors());
app.use(helmet());
app.use(express.json({limit: "500mb"}));
app.disable('x-powered-by');
app.use(helmet.hidePoweredBy());
// get the routes
app.use('/api', api);
// start the server
app.listen(port, (err) => {
    if (err) throw err;
    console.log("The ExpressJS server is running on port " + port);
})