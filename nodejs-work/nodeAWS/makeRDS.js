// This JS file will be used to make an RDS instance in AWS
let aws = require('aws-sdk');

//configure the region
aws.config.update({region:'us-east-1'});
let rds = new aws.RDS();

// set up the instance parameters
var parameters = {
    DBInstanceClass: 'db.t2.micro',
    DBInstanceIdentifier: process.env.DB_INSTANCE_ID,
    Engine: 'mysql',
    AllocatedStorage: 20,
    AvailabilityZone: process.env.ZONE,
    MasterUsername: process.env.DBUSER,
    MasterUserPassword: process.env.DBPASS,
    StorageType: 'gp2',
    PubliclyAccessible: false,
    DBName: process.env.DBNAME
};

rds.createDBInstance(parameters, (err, data) => {
    if (err) console.log(err, err.stack);
    console.log(data);
});
