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
  }
});

const Item = mongoose.model('Item', ItemSchema)
module.exports = Item
