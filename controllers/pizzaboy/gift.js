const _ = require('lodash')

const Gift = require('../../models/pizzaboy/gift')
const Item = require('../../models/pizzaboy/item')

const getGiftList = (req, res) => {
  Gift.find({}, (err, gifts) => {
    if (err)
      return res.status(500).send({errorMessage: `Server error: ${err}.`});

    res.status(200).send({gifts});
  })
}

const getGift = (req, res) => {
  let id = req.params.id;

  Gift.findById(id, (err, gift) => {
    if (err)
      return res.status(500).send({errorMessage: `Server error: ${err}.`});

    if (!gift)
      return res.status(404).send({message: `That gift does not exist.`});

    res.status(200).send({gift});
  })
}

const createGift = (req, res) => {
  let gift = new Gift();

  gift.code = req.body.code;
  gift.item = req.body.item;
  gift.expires = req.body.expires;
  gift.users = req.body.users;

  gift.save((err, createdGift) => {
    if (err)
      return res.status(500).send({errorMessage: `Server error: ${err}`});

    res.status(200).send({createdGift});
  })
}

const updateGift = (req, res) => {
  let id = req.params.id;
  let newGift = req.body

  Gift.findByIdAndUpdate(id, newGift, (err, gift) => {
    if (err)
      return res.status(500).send({errorMessage: `Server error: ${err}.`});

    if (!gift)
      return res.status(404).send({message: `That gift does not exist.`});

    res.status(200).send({gift});
  })
}

const deleteGift = (req, res) => {
  let id = req.params.id;

  Gift.findById(id, (err, gift) => {
    if (err)
      return res.status(500).send({errorMessage: `Server error: ${err}.`});

    if (!gift)
      return res.status(404).send({message: `That gift does not exist.`});

    gift.remove(err => {
      if (err)
        return res.status(500).send({errorMessage: `Server error: ${err}.`});

      res.status(200).send({message: `Gift deleted.`})
    })
  })
}

const redeemGift = (req, res) => {
  let code = req.body.code;
  let user = req.body.user;

  Gift.findOne({code: code, users: user})
  .populate('item')
  .exec((err, gift) => {
    if (err)
      return res.status(500).send({errorMessage: `Server error: ${err}.`});

    if (!gift)
      return res.status(404).send({message: `That gift does not exist.`});

    // Remove the user so he cannot redeem twice.
    let newUsers = _.remove(gift.users, function(u) {
      console.log('user: ', u);
      return u !== user;
    });
    gift.users = newUsers;
    gift.save((err, gift, numAffected) => {
      res.status(200).send({item: gift.item});
    })

    // If there is 
  })
}

module.exports = {
  getGiftList,
  getGift,
  createGift,
  updateGift,
  deleteGift,
  redeemGift
}
