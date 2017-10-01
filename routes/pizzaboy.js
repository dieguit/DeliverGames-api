const express = require('express')
const pizzaBoyRouter = express.Router()

const itemController = require('../controllers/pizzaboy/item')
const giftController = require('../controllers/pizzaboy/gift')

pizzaBoyRouter.get('/', (req, res) => {
  res.send("<h1>PizzaBoy</h1>");
});

// Items
pizzaBoyRouter.get('/item', itemController.getItemList);
pizzaBoyRouter.post('/item', itemController.createItem);

// Gifts
pizzaBoyRouter.get('/gift', giftController.getGiftList);
pizzaBoyRouter.post('/gift', giftController.createGift);

module.exports = pizzaBoyRouter;
