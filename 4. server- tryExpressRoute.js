// ATTEMPTED CREATING ROUTES - NOT YET WORKING

const express = require("express");
const app = express();
const fs = require("fs");

const port = process.env.PORT || 3000;

app.get((req, res) => {
  routes = {
    "/": "index.html",
    "/home": "index.html",
    "/about": "about.html",
    "/about-us": "about.html",
    "/contact": "contact.html",
  }

  if (routes[req.url] !== undefined) {
    res.sendFile(path.join(__dirname, routes[req.url].value))
  } else {
    res.sendFile(path.join(__dirname, "error.html"))
  }
});
app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});

