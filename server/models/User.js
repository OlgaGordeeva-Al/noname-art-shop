const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  admin: {
    type: Boolean,
    default: false
  },
  purchases: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'goods'
  }],

  favourites: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'goods'
  }]
})


const User = mongoose.model('users', userSchema);
module.exports = { User };
