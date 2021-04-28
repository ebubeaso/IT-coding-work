const readline = require('readline');
const fs = require('fs');

//make the read interface
const readingInterface = readline.createInterface({
    input: fs.createReadStream('DB_Credentials.txt'),
    terminal: false
});

// make the reading event
var username;
var password;
readingInterface.on('line', (line) => {
    if (line.includes('DB_USER')) {
        let user = line.slice(line.indexOf('DB_USER'), line.length);
        username = user.slice( (user.indexOf('=')+1), user.length );
        // console.log(username);
    }
    if (line.includes('DB_PASS')) {
        let passwd = line.slice(line.indexOf('DB_PASS'), line.length);
        password = passwd.slice( (passwd.indexOf('=')+1), passwd.length );
        console.log(password);
    }
});
console.log(username);