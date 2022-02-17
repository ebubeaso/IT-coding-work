"use strict"
// This will be used as the router
const express = require('express');
const job = require('./scheduler');
const scheduler = require("./scheduler");
// initialize the router
const router = express.Router();

// create the routes
router.get("/", (req, res) => {
    res.json({Message: "Howdy potna! I am letting you know you're all good!"})
});
router.post("/schedule/new", (req, res) => {
    job();
    res.json({Message: "Job sent!"})
})
// export it as a module
module.exports = router;