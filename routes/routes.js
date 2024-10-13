const express = require("express");
const { renderAboutPage } = require("../controllers/about");
const {
  validateContactForm,
  handleFormSubmission,
  renderContactPage,
  deleteContactHandler,
} = require("../controllers/contact");

const router = express.Router();

// Home (root) page
router.get("/", (req, res) => {
  res.render("index");
});

// About page
router.get("/about", renderAboutPage);

// Contact page
router.get("/contact", renderContactPage);
router.get("/contact/delete/:id", deleteContactHandler);
router.post("/contact/submit", validateContactForm, handleFormSubmission);

module.exports = router;
