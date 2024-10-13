const Employee = require("../models/employee");

const renderAboutPage = async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.render("about", { employees });
  } catch (error) {
    console.error(error); // TODO: handle error later
  }
};

module.exports = { renderAboutPage };
