const http = require('http');

var os = require( 'os' );
var networkInterfaces = os.networkInterfaces();
console.log(networkInterfaces); 

const hostname = '172.27.240.153';
// const hostname = http.address();
// console.log( server.address().address );
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

