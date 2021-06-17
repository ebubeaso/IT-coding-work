// This JavaScript file makes a new subnet
// this gets the subnet information from a VPC
var aws = require("aws-sdk");
var prompt = require("prompt-sync")();

aws.config.update({region: "us-east-1"});

var ec2 = new aws.EC2();

// make the parameters
let vpcId = prompt("Enter in the VPC ID that you want to add a subnet to: ");
var cidr = prompt("Enter the CIDR block that you would like to add to this subnet: ");
console.log(`The current region is ${aws.config.region}`);
console.log("What availability zone would you like to add this subnet to? ");
console.log("e.g: us-east-1a, us-east-1b, us-east-1d");
let az = prompt("==> ");
let subnetType = prompt("Will this subnet be a public or private subnet? ")
// set up the parameters
var parameters = {
    CidrBlock: cidr,
    VpcId: vpcId,
    AvailabilityZone: az,
    TagSpecifications: [{
        ResourceType: "subnet",
        Tags: [{Key: "Subnet Type", Value: subnetType}]
    }]
}
if (subnetType == "public") {
    ec2.createSubnet(parameters, (err, data) => {
        if (err) throw err;
        console.log(data);
        console.log("");
        console.log("Since this is a public subnet, I'll create an Internet gateway")
        ec2.createInternetGateway({}, (err, data) => {
            if (err) throw err;
            console.log("Finished making the Internet gateway!")
            console.log(data);
        })
    })
} else {
    ec2.createSubnet(parameters, (err, data) => {
        if (err) throw err;
        console.log("made the private subnet!")
        console.log(data);
    })
}