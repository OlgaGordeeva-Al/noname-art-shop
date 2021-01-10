const mongoose = require('mongoose');

const goodsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  authorName: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'artists'
  },
  year: String,
  article: String,
  material: String,
  size: String,
  sizeFilter: {
    type: String,
    require: true
  },
  type: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true
  },
  color: {
    type: String,
    require: true,
  },
  picture: {
    type: String,
    require: true,
  },
  description: String,
  discountPrice: Number,
  amount: {
  type: Number,
      default: 1,
  },
  createdAt: {
    type: String,
    default: new Date(new Date).toLocaleDateString('ru', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
  },
});

module.exports = mongoose.model('goods', goodsSchema);
