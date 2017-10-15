const express = require('express')
const pizzaBoyRouter = express.Router()

const itemController = require('../controllers/pizzaboy/item')
const giftController = require('../controllers/pizzaboy/gift')
const chestController = require('../controllers/pizzaboy/chest')

pizzaBoyRouter.get('/', (req, res) => {
  res.send("<h1>PizzaBoy</h1>");
});

// Items
pizzaBoyRouter.get('/item', itemController.getItemList);
pizzaBoyRouter.post('/item', itemController.createItem);
pizzaBoyRouter.get('/item/:id', itemController.getItem);
pizzaBoyRouter.put('/item/:id', itemController.updateItem);
pizzaBoyRouter.delete('/item/:id', itemController.deleteItem);

// Gifts
pizzaBoyRouter.get('/gift', giftController.getGiftList);
pizzaBoyRouter.post('/gift', giftController.createGift);
pizzaBoyRouter.get('/gift/:id', giftController.getGift);
pizzaBoyRouter.put('/gift/:id', giftController.updateGift);
pizzaBoyRouter.delete('/gift/:id', giftController.deleteGift);
pizzaBoyRouter.post('/gift/redeem', giftController.redeemGift);

// Chests
pizzaBoyRouter.post('/chest', chestController.generateChest);

module.exports = pizzaBoyRouter;
