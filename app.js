const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from Local Docker Container! CI/CD Success!\n');
});

server.listen(80, () => {
  console.log('Server running on internal port 80');
});