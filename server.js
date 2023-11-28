const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {
  fs.readFile('index.html', (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("File not found!");
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
