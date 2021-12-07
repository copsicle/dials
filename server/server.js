const http = require('http');
const fs = require('fs');
const readline = require('readline');

const hostname = '0.0.0.0';
const port = 8080;
// Object that gets served to the client via fetch
var dials = {
  alt: 0,
  his: 0,
  adi: 0,
}
// Temporary object to store dial values until all values are inserted
var temp = {
  alt: 0,
  his: 0,
  adi: 0,
}
// Main web server
const server = http.createServer((req, res) => {
  // Handle only GET requests because we arent using other types
  if (req.method === 'GET') {
    // Return index for root request
    if (req.url === '' || req.url === '/') {
      fs.readFile(__dirname + '/index.html', function (err,data) {
          if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
          }
          res.writeHead(200);
          res.end(data);
        });
    } 
    // Serve static files
    else if (req.url.startsWith('/static/')) {
      fs.readFile(__dirname + req.url, function (err,data) {
          if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
          }
          res.writeHead(200);
          res.end(data);
        });
    } 
    // Serve dial values as JSON
    else if (req.url === '/api/data') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(dials));
    }
    // Handle unknown requests
    else {
      res.writeHead(404);
      res.end('Not found');
    }
  }
  // Handle unknown requests
  else {
    res.writeHead(404);
    res.end('Not found');
  }
});
// Listen for connections and handle requests
server.listen(port, hostname, {});
// Terminal interface
var rl = readline.createInterface(process.stdin, process.stdout);
// Get input for a question from the terminal
const question = async (str) => new Promise(resolve => rl.question(str, resolve));
// Return when any key is pressed in the terminal
const keypress = async () => {
  process.stdin.setRawMode(true)
  return new Promise(resolve => process.stdin.once('data', () => {
    process.stdin.setRawMode(false)
    resolve()
  }))
}
// Asynchronously get inputs of dial values from the terminal 
const readinput = {
  alt: async () => {
    // First question - altitude
    temp.alt = parseInt(await question("Enter Altitude (Between 0 - 3000) >>> "));
    // Input validation
    if (temp.alt >= 0 && temp.alt <= 3000) {
      return readinput.his();
    } else {
      // Recurse if validation fails
      console.log('Wrong value');
      return readinput.alt();
    }
  },
  his: async () => {
    // Second question - HIS
    temp.his = parseInt(await question("Enter HIS (Between 0 - 360) >>> "));
    if (temp.his >= 0 && temp.his <= 360) {
      return readinput.adi();
    } else {
      console.log('Wrong value');
      return readinput.his();
    }
  },
  adi: async () => {
    // Third question - ADI
    temp.adi = parseInt(await question("Enter ADI (Between -100 - 100) >>> "));
    if (temp.adi >= -100 && temp.adi <= 100) {
      return readinput.prompt();
    } else {
      console.log('Wrong value');
      return readinput.adi();
    }
  },
  prompt: async () => {
    // Wait for keypress before new values are applied
    console.log("Press any key");
    await keypress();
    console.log(">Sending Data")
    // Apply the new values into the object that we send
    Object.assign(dials, temp);
    // Return to first question to continue getting input
    return readinput.alt();
  }
}

readinput.alt();