var pizzaboy = (app, authenticate) => {
  app.get('/', authenticate, (req, res) => {
    res.send("test");
  });
}

module.exports = {pizzaboy};
