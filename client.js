const net = require("net");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const conn = net.createConnection({
  host: 'localhost',
  port: 3000
});

conn.on("connect", () => {
  console.log("What file would you like to request?\n");
  // conn.write("./index.html");
});

rl.on("line", (data) => {
  conn.write(data);
});

conn.setEncoding('utf-8');

conn.on("data", (data) => {
  console.log("Server has returned:\n", data);
});

rl.on("SIGINT", () => {
  console.log("byeee");
  rl.close();
});