 
const app = require('./app.js');
const InitializeFile = require('./controller/fileWatcher.js');
const path = require('path');

const execPathDir = path.dirname(process.execPath);

const tankfilePath = path.join(execPathDir,+process.env.WATCH_FILE_NAME)

 

 
console.log("file waching started");
console.log(execPathDir);
const funcObj = InitializeFile(tankfilePath,process.env.WATCH_FILE_URL)
funcObj.watchFile()
