const { body, validationResult } = require("express-validator");
const Contact = require("../models/contact");

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

const handleFormSubmission = async (req, res) => {
  // handle when validate error
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return res.render("contact", { request: req.body, errors: errors });
  }

  try {
    // save data into database
    await Contact.create({
      firstName: req.body.contactFirstName,
      lastName: req.body.contactLastName,
      email: req.body.contactEmail,
      phoneNumber: req.body.contactPhone,
      city: req.body.contactCity,
      postalCode: req.body.contactPostalCode,
      comment: req.body.contactComment,
    });

    // render thank you page
    res.render("form-submitted", {
      request: {
        firstName: req.body.contactFirstName,
        lastName: req.body.contactLastName,
        email: req.body.contactEmail,
      },
    });
  } catch (error) {
    console.error(error); // handle error later
  }
};

const renderContactPage = async (req, res) => {
  res.render("contact");
};

module.exports = {
  validateContactForm,
  renderContactPage,
  handleFormSubmission,
};
