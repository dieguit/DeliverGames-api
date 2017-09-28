const {authenticate} = require('./middleware/authenticate');

// Pizza Boy Controllers
require('./pizzaboy')(app, authenticate);
