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

    res.status(200).send({item});
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

module.exports = {
  getItemList,
  getItem,
  createItem,
  updateItem,
  deleteItem
}
