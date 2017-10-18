const mongoose = require('../../db/mongoose')
const Schema = mongoose.Schema

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  code: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  tiers: [{
    tier: {
      type: Number,
      default: 0
    },
    chance: {
      type: Number,
      default: 50,
      min: 0,
      max: 100
    }
  }]
});

const Item = mongoose.model('Item', ItemSchema)
module.exports = Item
