var pizzaboy = (server, authenticate) => {
  server.get('/', (req, res) => {
    res.send("test2");
  });
}

module.exports = {pizzaboy};
