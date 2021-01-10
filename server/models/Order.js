const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  date: Date,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  goods: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'goods',
    },
  ],
  address: {
    type: String,
    require: true,
  },
  phone: String,
  comment: String,
  cash: Boolean,
  summ: Number,
  status: String,
});

module.exports = mongoose.model('orders', orderSchema);
