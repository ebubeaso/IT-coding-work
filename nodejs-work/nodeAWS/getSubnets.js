// this gets the subnet information from a VPC
var aws = require("aws-sdk");
var prompt = require("prompt-sync")();

aws.config.update({region: "us-east-1"});

var ec2 = new aws.EC2();

// make the parameters
vpcId = prompt("Enter in the VPC ID that you want the subnets of: ");

let parameters = {
    Filters: [
        {Name: "vpc-id", Values: [vpcId]}
    ]
};

// run the query
ec2.describeSubnets(parameters, (err, data) => {
    if (err) throw err;
    console.log(data.Subnets);
})
