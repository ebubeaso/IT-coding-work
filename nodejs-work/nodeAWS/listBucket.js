// this gets the Bucket information from AWS

const aws = require("aws-sdk");
// setting the region to us-east-1
aws.config.update({region: "us-east-1"});
var s3 = new aws.S3();

s3.listBuckets((err, data) => {
    if (err) throw err;
    result = data;
    console.log("Here are your current S3 buckets:")
    result.Buckets.forEach((d, i) => {
        console.log(`Bucket number ${i+1}: ${d.Name}`);
    }) 
})