const mongoose = require('../../db/mongoose')
const Schema = mongoose.Schema

const userScoreSchema = new Schema({
  code: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  score: {
    type: Number,
    required: true
  }
});

const UserScore = mongoose.model('UserScore', userScoreSchema)
module.exports = UserScore
