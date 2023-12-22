const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname,"./tank-LT05.txt")


function InitializeFile() {

    var data;
    var headerArray;
    var lastEntryArray;

    function readfile(filePath) {

        try { 
            console.log("file reading started");
            data =   fs.readFileSync(filePath,'utf8');
            
            console.log("data cleaing started");
            proccessData()

        } catch (error) {
            console.log("here is error for you ", error);
        }
        
    }

    function proccessData() {
        const lines = data.split('\n')
       
         headerArray = lines[0].replace(/[., ]/g, '');  // output -> DateTime|Level1m|Level2m 
         headerArray = headerArray.split("|")
       
         lastEntryArray = lines[lines.length-2].replace(/[ ]/g, '');  // output -> DateTime|Level1m|Level2m 
         lastEntryArray = lastEntryArray.split("|")

         let JSONobj ={};
         
         for (let i = 0; i < headerArray.length; i++) {
            JSONobj = {...JSONobj,[headerArray[i]]:lastEntryArray[i]}
          }


          
         console.log("required data",JSONobj.DateTime);
        // lastEntryArray = lines[lines.length-2].split("|");
    }
 

    function watchFile(filePath) {
        fs.watchFile(filePath, (curr, prev) => {
            console.log("waching file...");
            if (curr.mtime > prev.mtime) {
                readfile(filePath)
            }
          });
    }
 
    return{
        readfile,proccessData,watchFile

    } 
}
 


const funcObj = InitializeFile();

funcObj.watchFile(filePath)
    