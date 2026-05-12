const http = require('node:http');

const app = http.createServer((req, res) =>{
res.writeHead(200, { 'Content-Type' : 'text/plain' });
res.end('Hello Holberton School!');
});

server.listen(1245, '127.0.0.1');
module.exports = app;