/* 
This javascript file will help me make better passwords for my servers. It will 
take in the input. First, it will take in the name of the server that you want to make
a new password for as well as how long the password should be. The minimum will be 8 characters
long and the max will be 20. You will also be given the option of a special character (like !, ? or &) 
to use for a stronger password. Then, it will randomize the input into a string of random characters.
from there, it will then make a hash of that string. After that, it will get today's date
and hash that into a string as well. From there, it will combine the two hashes and select a random set
of characters from the combined hashes to put into the new password. In addition, it will add that 
special chatacter to a random position in the password output  
*/
const crypto = require("crypto");
const readline = require("readline");
// make the interface for getting user input
const userInput = readline.createInterface({input: process.stdin, output: process.stdout});
userInput.question("What is the name of the server that you are trying to secure? ", (server) => {
    userInput.question("How long do you want the password to be? (minimum: 8, maximum: 20): ", (passLength) => {
        // randomize the letters in the server name
        let count = 0;
        let randomized = "";
        while (count < server.length) {
            randomized += server[Math.floor(Math.random() * (server.length - 0) + 0)]
            count ++;
        }
        // hash the randomized letters
        let hashName = crypto.createHash("sha512").update(randomized).digest("hex");
        // get today's date and hash it
        let today = new Date();
        let hashDate = crypto.createHash("sha512").update(String(today)).digest("hex");
        // combine the two hashes
        let mergeHashes = hashDate + hashName;
        // get random letters from the large hash and insert a random special character
        let specials = ['!', '?', '@', '$'];
        let result = "";
        for (let i = 0; i < parseInt(passLength); i++) {
            result += mergeHashes[Math.floor(Math.random() * (mergeHashes.length - 1) + 1)];
        }
        // add a capital letter
        let capitals = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let addCaps = result.replace(
            result.charAt(Math.floor(Math.random() * (passLength - 0) + 0)), 
            capitals[Math.floor(Math.random() * (capitals.length - 0) + 0)]
        )
        // final password (get a random character to manipulate)
        let char = addCaps.charAt(Math.floor(Math.random() * (capitals.length - 0) + 0));
        /* Although this code here looks complex, this is what it is doing:
            - It is going to check if the random character selected is not a number
            - If it is not a number, make it a capital letter. However, it is a 
            number, simply replace it with one of the special characters in the 'specials'
            array given above
        */
        let password = "";
        if (isNaN(char)) {
            let passwd = addCaps.replace(char, char.toUpperCase());
            let specialChar = Math.floor(Math.random() * (specials.length - 0) + 0);
            password = passwd.replace(passwd.charAt(passLength - 1), specials[specialChar]);
        } else {
            password = addCaps.replace(char, specials[
                Math.floor(Math.random() * (specials.length - 0) + 0)
            ])
        }
        console.log("\nHere is your randomly generated password!!");
        console.log(password);
        userInput.close();
    })
})