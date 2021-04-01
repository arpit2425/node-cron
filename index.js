const cron = require('node-cron');
const shell = require('shelljs');
cron.schedule('* * * * * *', () => {
  console.log("cron job running every second")
})
cron.schedule("10 0 0 * * * *", () => {
  shell.exec('ls');
})