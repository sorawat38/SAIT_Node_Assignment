const handleFormSubmission = (req, res) => {
  console.log(req.body);

  res.redirect("/submit/success");
};

const renderFormRegistrationSuccess = (req, res) => {
  res.render("form-submitted");
};

module.exports = {
  handleFormSubmission,
  renderFormRegistrationSuccess,
};
