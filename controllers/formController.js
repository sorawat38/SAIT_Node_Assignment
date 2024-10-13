const { body, validationResult } = require("express-validator");

const validateContactForm = [
  body("contactFirstName")
    .trim()
    .notEmpty()
    .withMessage("First Name is required"),
  body("contactLastName")
    .trim()
    .notEmpty()
    .withMessage("Last Name is required"),
  body("contactEmail")
    .trim()
    .notEmpty()
    .withMessage("Last Name is required")
    .isEmail()
    .withMessage("Email is invalid format"),
  body("contactPhone")
    .trim()
    .notEmpty()
    .withMessage("Phone number is required")
    .isMobilePhone("en-CA")
    .withMessage("Phone number is invalid format"),
  body("contactCity").trim().notEmpty().withMessage("City is required"),
  body("contactPostalCode")
    .trim()
    .notEmpty()
    .withMessage("Postal Code is required")
    .isPostalCode("CA")
    .withMessage("Invalid Canadian postal code"),
  body("contactComment").optional().isString(),
];
const handleFormSubmission = (req, res) => {
  console.log(req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return res.render("contact", { request: req.body, errors: errors });
  }
  res.redirect("/contact/submit/success");
};

const renderFormRegistrationSuccess = (req, res) => {
  res.render("form-submitted");
};

module.exports = {
  validateContactForm,
  handleFormSubmission,
  renderFormRegistrationSuccess,
};
