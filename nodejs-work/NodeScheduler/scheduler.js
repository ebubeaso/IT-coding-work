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
const job = () => {
    const newRule = new schedule.RecurrenceRule()
    newRule.second = new schedule.Range(0, 59, 15) // using the range helps the recurrence rule
    // The last number, "15" will signify how many times to repeat this.
    schedule.scheduleJob(newRule, function(){
        console.log('I have scheduled my first task!!');
    });
}
module.exports = job;