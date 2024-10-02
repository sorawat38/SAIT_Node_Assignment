const express = require("express");
const path = require("path");
const {
  renderFormRegistration,
  handleFormSubmission,
  renderFormRegistrationSuccess,
} = require("../controllers/formController");

const router = express.Router();

const rootDir = path.dirname(require.main.filename);

// Home (root) page
router.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "index.html"));
});

// About page
router.get("/test/about", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "about.html"));
});

// Contact page
router.get("/contact", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "contact.html"));
});

// Submit endpoint handler
router.get("/submit", renderFormRegistration);
router.post("/submit", handleFormSubmission);
router.get("/submit/success", renderFormRegistrationSuccess);

module.exports = router;
