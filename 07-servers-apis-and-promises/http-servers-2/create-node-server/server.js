const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello");
  res.write(" ");
  res.write("World");
  res.end("!");
});

const port = 5000;

server.listen(port, () => console.log(`Server is listening on port ${port}`));
