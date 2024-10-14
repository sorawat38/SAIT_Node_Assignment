// Genearte random greetings
const randomGreetings = () => {
  const greetings = ["Hello", "Bonjour", "Hola", "Ciao"];
  return greetings[Math.floor(Math.random() * greetings.length)];
};

module.exports = { randomGreetings };
