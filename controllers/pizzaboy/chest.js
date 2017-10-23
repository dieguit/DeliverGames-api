const _ = require('lodash')

const Item = require('../../models/pizzaboy/item')

const generateChest = (req, res) => {
  let chest = {
    size: req.body.size,
    tiers: req.body.tiers
  };

  if (!chest.size || !(_.isInteger(chest.size))) {
    return res.status(500).send({errorMessage: `Server error: Chest size must be an integer.`});
  }

  if (!chest.tiers || chest.tiers.length === 0) {
    return res.status(500).send({errorMessage: `Server error: Must provide at least one tier.`});
  }

  var itemTiers = [];
  for (var i = 0; i < chest.size; i++) {
    let chosenTier = -1;
    let tier = 0;
    while (chosenTier === -1 && tier < chest.tiers.length) {
      if (Math.random() <= chest.tiers[tier] / 100) {
        chosenTier = tier;
      }
      tier++;
    }
    // Get next tier as fallback chosenTier.
    chosenTier = chosenTier === -1 ? tier : chosenTier;

    // Add or create tier value.
    itemTiers[chosenTier] = itemTiers[chosenTier] ? itemTiers[chosenTier] + 1 : 1;
  }

  var itemList = [];
  Item.find({}, (err, items) => {
    if (!err && items) {
      itemList = items;
      console.warn('itemTiers', itemTiers);
      for (var i = 0; i < itemTiers.length; i++) {
        //if (itemTiers[i])
      }
      return res.status(200).send({itemTiers});
    }
  });
}

const generateChest2 = (req, res) => {
  let chest = {
    size: req.body.size,
    tiers: req.body.tiers
  };

  if (!(_.isInteger(chest.size))) {
    return res.status(500).send({errorMessage: `Server error: Chest size must be an integer.`});
  }

  if (_.isInteger(chest.tiers.length === 0)) {
    return res.status(500).send({errorMessage: `Server error: Must provide at least one tier.`});
  }

  var items = [];
  for (var i = 0; i < chest.size; i++) {
    let chosenTier = -1;
    let tier = 0;
    while (chosenTier === -1 && tier < chest.tiers.length) {
      if (Math.random() <= chest.tiers[tier] / 100) {
        chosenTier = tier;
      }
      tier++;
    }
    // Get next tier as fallback chosenTier.
    chosenTier = chosenTier === -1 ? tier : chosenTier;
    // Get the count of all Items
    Item.count({tier: chosenTier}, (err, count) => {
      // if (err)
      //   throw new Error(`Server error: ${err}.`);
      //
      // if (count === 0)
      //   throw new Error(`Server error: Tier ${chosenTier} does not contain any items.`);

      let random = Math.floor(Math.random() * count);
      // Get a random item in that tier.
      Item.findOne({tier: chosenTier}).skip(random).exec((err, item) => {
        // if (err)
        //   throw new Error(`Server error: ${err}.`);

        // Tada! random item.
        items.push(item);

        // If this is the last item, return the final result.
        if (items.length === chest.size) {
          return res.status(200).send({items});
        }
      })
    })
  }
}

module.exports = {
  generateChest
}
