const express = require("express");
const {
  validateContactForm,
  handleFormSubmission,
  renderContactPage,
} = require("../controllers/contact");

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
router.get("/contact", renderContactPage);
router.post("/contact/submit", validateContactForm, handleFormSubmission);

module.exports = router;
