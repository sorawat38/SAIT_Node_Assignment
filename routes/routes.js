const express = require("express");
const {
  handleFormSubmission,
  renderFormRegistrationSuccess,
} = require("../controllers/formController");

const router = express.Router();

// Home (root) page
router.get("/", (req, res) => {
  res.render("index");
});

// About page
router.get("/about", (req, res) => {
  res.render("about");
});

// Contact page
router.get("/contact", (req, res) => {
  res.render("contact");
});
router.post("/contact/submit", handleFormSubmission);
router.get("/contact/submit/success", renderFormRegistrationSuccess);

module.exports = router;
