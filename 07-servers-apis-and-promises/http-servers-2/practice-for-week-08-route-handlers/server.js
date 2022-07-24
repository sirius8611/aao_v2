const http = require("http");

let nextDogId = 1;

function getNewDogId() {
  const newDogId = nextDogId;
  nextDogId++;
  return newDogId;
}

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  // When the request is finished processing the entire body
  req.on("end", () => {
    // Parsing the body of the request
    if (reqBody) {
      req.body = reqBody
        .split("&")
        .map((keyValuePair) => keyValuePair.split("="))
        .map(([key, value]) => [key, value.replace(/\+/g, " ")])
        .map(([key, value]) => [key, decodeURIComponent(value)])
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
      console.log(req.body);
    }
    // Do not edit above this line
    let id = checkForIdRoute(req.url, "/dogs");

    if (req.method === "GET" && req.url === "/") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      return res.end("Dog Club");
    }

    if (req.method === "GET" && req.url === "/dogs") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      return res.end("Dogs index");
    }

    if (req.method === "GET" && id) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      return res.end(`Dog ID: ${id}`);
    }

    if (req.method === "POST" && req.url === "/dogs") {
      res.statusCode = 302;
      res.setHeader("Content-Type", "text/plain");
      res.setHeader("Location", `/dogs/${getNewDogId()}`);
      return res.end("");
    }

    if (req.method === "POST" && req.url === `/dogs/${id}`) {
      res.statusCode = 302;
      res.setHeader("Content-Type", "text/plain");
      res.setHeader("Location", `/dogs/${id}`);
      return res.end("");
    }

    if (req.method === "GET" && req.url === `/dogs/${id}/edit`) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      return res.end(`Dog edit form page for ${id}`);
    }

    // Do not edit below this line
    // Return a 404 response when there is no matching route handler
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    return res.end("No matching route handler found for this endpoint");
  });
});

function checkForIdRoute(url, root) {
  let startsWith = url.startsWith(root);
  let id = null;
  let subStrArr = url.split("/");
  if (startsWith && subStrArr.length === 3) {
    id = subStrArr[2];
  }
  return id;
}

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));
