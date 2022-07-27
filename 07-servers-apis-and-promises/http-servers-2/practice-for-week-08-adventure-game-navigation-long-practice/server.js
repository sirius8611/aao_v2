const http = require("http");
const fs = require("fs");

const { Player } = require("./game/class/player");
const { World } = require("./game/class/world");

const worldData = require("./game/data/basic-world-data");

let player;
let world = new World();
world.loadWorld(worldData);

const server = http.createServer((req, res) => {
  /* ============== ASSEMBLE THE REQUEST BODY AS A STRING =============== */
  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  req.on("end", () => {
    // After the assembly of the request body is finished
    /* ==================== PARSE THE REQUEST BODY ====================== */
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
    }

    /* ======================== ROUTE HANDLERS ========================== */
    // Phase 1: GET /

    if (req.method === "GET" && req.url === "/") {
      const htmlRooms = world.availableRoomsToString();

      const htmlTemplate = fs.readFileSync("./views/new-player.html", "utf-8");
      let htmlPage = htmlTemplate.replace(/{availableRooms}/g, htmlRooms);

      res.status = 200;
      res.setHeader("Content-Type", "text/html");
      res.write(htmlPage);
      return res.end();
    }

    // Phase 2: POST /player
    if (req.method === "POST" && req.url === "/player") {
      let { name, roomId } = req.body;

      let room = world.rooms[roomId];
      player = new Player(name, room);

      res.writeHead(302, {
        location: `/rooms/${roomId}`,
      });
      return res.end();
    }

    if (!player) {
      res.writeHead(302, {
        location: `/`,
      });
    }

    // Phase 3: GET /rooms/:roomId
    if (req.method === "GET" && req.url.startsWith("/rooms/")) {
      try {
        const urlParts = req.url.split("/");
        if (urlParts.length === 3) {
          const roomId = urlParts[2];

          if (parseInt(roomId) !== player.currentRoom.id) {
            res.writeHead(302, {
              location: `/rooms/${roomId}`,
            });
            return res.end();
          }

          const room = world.rooms[roomId];
          const inventory = player.items
            .map((item) => {
              return item.name;
            })
            .join(", ");

          const roomItems = room.items
            .map((item) => {
              return item.name;
            })
            .join(", ");

          let exits = [];
          for (direction in room.exits) {
            exits.push(direction);
          }
          exits = exits.join(", ");
          const htmlTemplate = fs.readFileSync("./views/room.html", "utf-8");
          let htmlPage = htmlTemplate
            .replace(/#{roomName}/g, room.name)
            .replace(/#{inventory}/g, inventory)
            .replace(/#{roomItems}/g, roomItems)
            .replace(/#{exits}/g, exits);

          res.statusCode = 404;
          res.setHeader("Content-Type", "text/html");
          res.write(htmlPage);
          return res.end();
        }
      } catch (error) {
        res.writeHead(302, {
          location: `/rooms/${player.currentRoom.id}`,
        });
        return res.end();
      }
    }

    // Phase 4: GET /rooms/:roomId/:direction
    if (req.method === "GET" && req.url.startsWith("/rooms/")) {
      const urlParts = req.url.split("/");
      if (urlParts.length === 4) {
        const roomId = urlParts[2];
        const direction = urlParts[3];

        if (parseInt(roomId) !== player.currentRoom.id) {
          res.writeHead(302, {
            location: `/rooms/${roomId}`,
          });
          return res.end();
        }

        const room = world.rooms[roomId];
        const nextRoom = room.exits[direction];

        player.move(direction);

        res.writeHead(302, {
          location: `/rooms/${nextRoom.id}`,
        });

        return res.end();
      }
    }

    // Phase 5: POST /items/:itemId/:action

    // Phase 6: Redirect if no matching route handlers
  });
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));
