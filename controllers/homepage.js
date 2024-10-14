const renderHomePage = async (req, res) => {
  const greetings = ["Hello", "Bonjour", "Hola", "Ciao"];
  const randomGreetings = (greetings) =>
    greetings[Math.floor(Math.random() * greetings.length)];

  res.render("index", { greetings: randomGreetings(greetings) });
};

module.exports = { renderHomePage };
