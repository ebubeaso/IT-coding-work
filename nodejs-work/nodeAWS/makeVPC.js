// This creates a new VPC in AWS
var aws = require("aws-sdk");
var prompt = require("prompt-sync")();

aws.config.update({region: "us-east-1"});

let vpc = new aws.EC2();
let cidr = prompt("Enter the CIDR block that you want to use: ");
vpc.createVpc({CidrBlock: cidr}, (err, data) => {
    if (err) throw err;
    console.log("Success! Here are the results: ")
    console.log("");
    console.log(data);
})