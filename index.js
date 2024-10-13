const express = require("express");
const path = require("path");

// const bodyParser = require("body-parser");
const logger = require("./middleware/logger");
const routes = require("./routes/routes");

// init config
const app = express();
const PORT = 8000;

// Createing a static directory
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(logger);

// Routes
app.use(routes);

// start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
