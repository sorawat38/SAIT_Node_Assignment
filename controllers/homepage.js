const { randomGreetings } = require("../utils/greeting");

const renderHomePage = async (req, res) => {
  res.render("index", { greetings: randomGreetings() });
};

module.exports = { renderHomePage };
