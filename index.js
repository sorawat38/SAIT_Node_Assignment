const express = require("express");
const path = require("path");
// const bodyParser = require("body-parser");

// init config
const app = express();
const PORT = 8000;

// Alternative way to call path
// const rootDir = path.dirname(require.main.filename);

// Createing a static directory
app.use(express.static(path.join(__dirname, "public")));

// Middleware for parsing body of forms
app.use(express.urlencoded({ extended: true }));

// Home (root) page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

// About page
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "about.html"));
});

// Contact page
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "contact.html"));
});

app.get("/submitted", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "form-submitted.html"));
});

app.get("/submit", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "registration.html"));
});

app.post("/submit", (req, res) => {
  // let { contactFirstName, contactLastName, contactEmail } = req.body;
  console.log(`form submit data: \n${req.body}`);

  res.redirect("/submitted");
});

// generic endpoint
app.use((req, res) => {
  res.contentType("html").status(404).send("<h1>404 Not Found</h1>");
});

// start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
