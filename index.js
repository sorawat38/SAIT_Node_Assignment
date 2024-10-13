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

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use(routes);

// start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
