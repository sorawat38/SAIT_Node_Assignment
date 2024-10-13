const Employee = require("../models/employee");

const renderAboutPage = async (req, res) => {
  try {
    res.render("about");
  } catch (error) {
    console.error(error); // TODO: handle error later
  }
};

module.exports = { renderAboutPage };
