// this is to test out the API backend call
const axios = require('axios');

// make the API call to the backend server
axios.get("http://localhost:9900/usage")
    .then(response => {
        console.log("Here is the data below:");
        console.log(response.data);
    })
    .catch(error => console.log(error))
    .then(() => {
        console.log("");
        console.log("Axios test complete!");
    });