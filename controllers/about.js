const Employee = require("../models/employee");

const renderAboutPage = async (req, res) => {
  try {
    // query all employee
    const employees = await Employee.findAll();
    res.render("about", { employees });
  } catch (error) {
    console.error(error);
    res.render("about", { employees: [] });
  }
};

module.exports = { renderAboutPage };
