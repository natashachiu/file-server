const net = require("net");
const fs = require("fs");

const server = net.createServer();

server.listen(3000, () => {
  console.log("Server listening on port 3000\n");
});

server.on("connection", (conn) => {
  console.log("New client has connected!\n");

  conn.setEncoding("utf8");


  conn.on('data', (data) => {
    fs.readFile(data, 'utf-8', (err, data) => {
      if (err) {
        conn.write("Invalid file, try again");
        return;
      }

      conn.write(data);
    });
  });
});

