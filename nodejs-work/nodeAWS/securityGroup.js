/*
This javascript file is going to add in the permissions for SSH to the EC2 
instance that I have running in AWS
*/

const aws = require('aws-sdk');
// security group id
const securityGroupID = process.env.SEC_GROUP_ID;
// make the region configuration
aws.config.update({region:'us-east-1'});
// make the EC2 variable
var ec2 = new aws.EC2();

// make the parameters
var parameters = {
    GroupId: securityGroupID,
    IpPermissions: [
        {
            FromPort: 22, IpProtocol: "tcp", IpRanges: [
            {CidrIp: process.env.IP_ADDRESS, Description:"SSH access"}],
            ToPort: 22
        }
    ]
};

// run the authorizeSecurityGroupIngress API
ec2.authorizeSecurityGroupIngress(parameters, (error, data) => {
    if (error) console.log(error, error.stack);
    console.log(data);
})


