const express = require("express");
const env = require("dotenv");
const path = require("path");

const { sequelize } = require("./config/db");
const logger = require("./middleware/logger");
const routes = require("./routes/routes");

// load env
env.config();

// init config
const app = express();
const port = process.env.PORT || 8000;

// sync DDL
sequelize
  .sync({ force: false })
  .then(console.log("All models were synchronized successfully."))
  .catch((err) => console.error(err));

// Createing a static directory
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(logger);

// Routes
app.use(routes);

// Not found page
app.use((req, res) => {
  res.status(404).render("404");
});

// start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
