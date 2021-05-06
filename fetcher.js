const fs = require('fs');
let info = require(`yargs`).argv
let userURL = info._[0];
let userPath = info._[1];

const request = require('request');
request(userURL, (error, response, body) => {
  if(error) {
    console.log('invalid URL!!!')
    return;
  }
  fs.writeFile(userPath, body, function(error) {
    if(error) {
      console.log('incorrect file path!!!')
      return;
    }
    const stat = fs.statSync(userPath)
    const size = stat.size;
    console.log(`Downloaded and saved ${size} bytes to ${userPath}`);    
  })
});