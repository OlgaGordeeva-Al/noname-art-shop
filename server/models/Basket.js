const mongoose = require('mongoose');

const basketSchema = mongoose.Schema({
  date: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  goods: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'goods'
  }],
  summ: Number
})


module.exports = mongoose.model('baskets', basketSchema);
