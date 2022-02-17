"use strict"
const schedule = require('node-schedule');

/** 
 * This function is used to schedule a job. 
 * 
 * Cron examples:
 * "0/15 * * * * *" --> run this task every 15 seconds  
 * It will print out the sentence
 * 'I have scheduled my first task!!' every seconds
*/
const job = () => schedule.scheduleJob('0/15 * * * * *', function(){
  console.log('I have scheduled my first task!!');
});
module.exports = job;