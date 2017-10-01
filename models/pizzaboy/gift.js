const mongoose = require('../../db/mongoose')
const Schema = mongoose.Schema

const GiftSchema = new Schema({
  code: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item',
    required: true
  },
  users: [{
    type: String,
    trim: true
  }],
  redeemed: {
    type: Date,
    default: null
  },
  expires: {
    type: Date,
    default: null
  }
});

const Gift = mongoose.model('Gift', GiftSchema)
module.exports = Gift
