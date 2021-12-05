const http = require('http');
const fs = require('fs');
const readline = require('readline');

const hostname = '127.0.0.1';
const port = 3001;

var dials = {
  alt: 0,
  his: 0,
  adi: 0,
}

var temp = {
  alt: 0,
  his: 0,
  adi: 0,
}

const server = http.createServer((req, res) => {
  // Return index for root request
  if (req.method === 'GET')
  {
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

server.listen(port, hostname, () => {
  //console.log(`Server running at http://${hostname}:${port}/`);
});

// processline(0, 3000, 'Altitude');
// processline(0, 360,  'HIS');
// processline(-100, 100, 'ADI');

var rl = readline.createInterface(process.stdin, process.stdout);

const question = async (str) => new Promise(resolve => rl.question(str, resolve));

const keypress = async () => {
  process.stdin.setRawMode(true)
  return new Promise(resolve => process.stdin.once('data', () => {
    process.stdin.setRawMode(false)
    resolve()
  }))
}

const readinput = {
  alt: async () => {
    temp.alt = await question("Enter Altitude (Between 0 - 3000) >>> ");
    if (temp.alt >= 0 && temp.alt <= 3000 ) {
      return readinput.his();
    } else {
      console.log('Wrong value');
      return readinput.alt();
    }
  },
  his: async () => {
    temp.his = await question("Enter HIS (Between 0 - 360) >>> ");
    if (temp.his >= 0 && temp.his <= 360 ) {
      return readinput.adi();
    } else {
      console.log('Wrong value');
      return readinput.his();
    }
  },
  adi: async () => {
    temp.adi = await question("Enter ADI (Between -100 - 100) >>> ");
    if (temp.adi >= -100 && temp.adi <= 100 ) {
      return readinput.prompt();
    } else {
      console.log('Wrong value');
      return readinput.adi();
    }
  },
  prompt: async () => {
    console.log("Press any key");
    await keypress();
    console.log(">Sending Data")
    Object.assign(dials, temp);
    return readinput.alt();
  }
}

readinput.alt();