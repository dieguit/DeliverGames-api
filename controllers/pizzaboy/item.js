const _ = require('lodash')
const crypto = require('crypto')

const Item = require('../../models/pizzaboy/item')

const getItemList = (req, res) => {
  Item.find({}, (err, items) => {
    if (err)
      return res.status(500).send({errorMessage: `Server error: ${err}.`});

    res.status(200).send({items});
  }).populate('item')
}

const getItem = (req, res) => {
  let id = req.params.id;

  Item.findById(id, (err, item) => {
    if (err)
      return res.status(500).send({errorMessage: `Server error: ${err}.`});

    if (!item)
      return res.status(404).send({message: `That item does not exist.`});

    res.status(200).send({item});
  })
}

const createItem = (req, res) => {
  let item = new Item();

  item.code = req.body.code;
  item.name = req.body.name;
  item.tier = req.body.tier;

  item.save((err, createdItem) => {
    if (err)
      return res.status(500).send({errorMessage: `Server error: ${err}`});

    res.status(200).send({createdItem});
  })
}

const updateItem = (req, res) => {
  let id = req.params.id;
  let newItem = req.body

  Item.findByIdAndUpdate(id, newItem, (err, item) => {
    if (err)
      return res.status(500).send({errorMessage: `Server error: ${err}.`});

    if (!item)
      return res.status(404).send({message: `That item does not exist.`});

    res.status(200).send({newItem});
  })
}

const deleteItem = (req, res) => {
  let id = req.params.id;

  Item.findById(id, (err, item) => {
    if (err)
      return res.status(500).send({errorMessage: `Server error: ${err}.`});

    if (!item)
      return res.status(404).send({message: `That item does not exist.`});

    item.remove(err => {
      if (err)
        return res.status(500).send({errorMessage: `Server error: ${err}.`});

      res.status(200).send({message: `Item deleted.`})
    })
  })
}

const getRandomByTier = (req, res) => {
  let tier = req.params.tier;

  Item.find({'tiers.tier': {$in: tier}}, (err, items) => {
    if (err)
      return res.status(500).send({errorMessage: `Server error: ${err}.`});

    if (!items)
      return res.status(404).send({message: `There are not any available items in this tier.`});

    // Get all items and sort them to pick one randomly.
    let itemList = [];
    var start = 0;
    var end = 0;
    items.forEach((item, key) => {
      let chance = _.filter(item.tiers, x => x.tier == tier)[0].chance;
      end = start + chance;
      itemList.push({
        item: item,
        start: start,
        end: end
      });
      start = end;
    })

    // Pick random!
    // @TODO: get cryptographically strong pseudo-random number.
    //var value = random(0, 100);
    var random = Math.random() * end;
    let item = _.filter(itemList, x => x.start <= random && x.end > random)[0];

    res.status(200).send({item: item.item});
  })
}

// const random = (low, high) => {
//     let random = parseInt(crypto.randomBytes(4).toString('hex'), 16);
//     let result = (random / Number.MAX_SAFE_INTEGER) * (high - low) + low
//
//     return result;
// }

module.exports = {
  getItemList,
  getItem,
  createItem,
  updateItem,
  deleteItem,
  getRandomByTier
}
