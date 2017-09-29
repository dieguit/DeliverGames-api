const express = require('express')
const pizzaBoyRouter = express.Router()

pizzaBoyRouter.get('/', (req, res) => {
  res.send("<h1>PizzaBoy</h1>");
});

module.exports = pizzaBoyRouter;
