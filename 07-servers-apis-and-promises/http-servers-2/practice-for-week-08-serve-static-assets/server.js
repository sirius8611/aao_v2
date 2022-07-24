const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url.startsWith("/index")) {
    const index = fs.readFileSync("./index.html", "utf-8");
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(index);
  }

  if (req.method === "GET" && req.url.startsWith("/static")) {
    res.statusCode = 200;
    let path = "./assets";

    const fileExt = req.url.split(".")[1];
    if (fileExt === "jpg") {
      res.setHeader("Content-Type", "image/jpeg");
      path += "/images";
      console.log(path + `/${req.url.split("/")[3]}`);
      const body = fs.readFileSync(`${path}/${req.url.split("/")[3]}`);
      res.end(body);
    }

    if (fileExt === "css") {
      res.setHeader("Content-Type", "text/css");
      path += "/css";
      const body = fs.readFileSync(`${path}/${req.url.split("/")[3]}`, "utf-8");
      res.end(body);
    }
  }
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));
