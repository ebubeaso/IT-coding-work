// this gets the VPC information from AWS
var aws = require("aws-sdk");
aws.config.update({region: "us-east-1"});

// make ec2 variable
let ec2 = new aws.EC2();
ec2.describeVpcs((err, data) => {
    if (err) throw err;
    console.log("Here is the data");
    let result = data.Vpcs;
    console.log(result)
    console.log("")
    console.log("Here is the VPC ID");
    console.log(result[0].VpcId);
})