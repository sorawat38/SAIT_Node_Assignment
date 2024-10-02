const path = require("path");
const rootDir = path.dirname(require.main.filename);

const renderFormRegistration = (req, res) => {
  res.sendFile(path.join(rootDir, "views", "contact.html"));
};

const renderFormRegistrationSuccess = (req, res) => {
  res.sendFile(path.join(rootDir, "views", "form-submitted.html"));
};

const handleFormSubmission = (req, res) => {
  console.log(req.body);

  res.redirect("/submit/success");
};

module.exports = {
  renderFormRegistration,
  handleFormSubmission,
  renderFormRegistrationSuccess,
};
