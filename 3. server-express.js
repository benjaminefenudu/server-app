// EXPRESS-SERVER - WORKING

const express = require("express");
const app = express();
const path = require("path");

const port = process.env.PORT || 3000;

// use array [] to add two or more URL choices - Yippee!!!
app.get(["/", "/home"], (req, res) =>
  res.status(200).sendFile(path.join(__dirname, "public", "index.html"))
);

app.get("/about", (req, res) =>
  res.status(200).sendFile(path.join(__dirname, "public", "about.html"))
);

// Utilized res.redirect to redirect from /about-us to /about
app.get("/about-us", (req, res) => res.redirect("/about"));

app.get("/contact", (req, res) =>
  res.status(200).sendFile(path.join(__dirname, "public", "contact.html"))
);

app.get("*", (req, res) =>
  res.status(404).sendFile(path.join(__dirname, "public", "error.html"))
);

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
