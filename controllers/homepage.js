const renderHomePage = async (req, res) => {
  // Genearte random greetings
  const greetings = ["Hello", "Bonjour", "Hola", "Ciao"];
  const randomGreetings = (greetings) =>
    greetings[Math.floor(Math.random() * greetings.length)];

  res.render("index", { greetings: randomGreetings(greetings) });
};

module.exports = { renderHomePage };
