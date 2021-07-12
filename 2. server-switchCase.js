// HTTP SWITCH CASE

const http = require("http");
const fs = require("fs");

const port = 3000;
let status;

const server = http
  .createServer((req, res) => {
    switch (req.url) {
      case "/":
      case "/home":
        path = "./public/index.html";
        status = 200;
        break;
      case "/about":
      case "/about-us":
        path = "./public/about.html";
        status = 200;
        break;
      case "/contact":
        path = "./public/contact.html";
        status = 200;
        break;
      default:
        path = "./public/error.html";
        status = 404;
    }

    fs.readFile(path, (err, data) => {
      if (err) {
        return console.error(err);
      }
      res.writeHead(status, { "Content-Type": "text/html" });
      res.end(data);
      console.log(`Client requested ${req.url}.`);
      console.log(`Client was served ${path}.`);
    });
  })
  .listen(port, () => {
    console.log(`Server listening on port ${port}...`);
  });
