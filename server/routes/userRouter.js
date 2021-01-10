const express = require('express');
const router = express.Router();
const { User } = require('../models/User');
const Order = require('../models/Order');
const Basket = require('../models/Basket');
const authMiddleware = require('../middlewares/auth');

router.post('/api/v1/order', async (req, res) => {
  const { userId, basketId, address, comment } = req.body;
  try {
    const basket = await Basket.findById(basketId);
    const newOrder = new Order({
      date: new Date(),
      user: userId,
      goods: basket.goods,
      address: address,
      comment: comment,
      summ: basket.summ,
      status: 'В обработке',
    });
    await newOrder.save();
    await basket.remove();
  } catch (err) {
    console.log(err, 'err from order');
    return res.sendStatus(500);
  }
  return res.sendStatus(200);
});

router.get('/api/v1/order/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const orders = await Order.find({ user: userId }).populate('goods');
    return res.json(orders);
  } catch (err) {
    console.log(err, 'err from get orders ');
    return res.sendStatus(500);
  }
});

router.patch('/api/v1/favourites', async (req, res) => {
  const { userId, productId } = req.body;

  try {
    const user = await User.findOne({ _id: userId });

    if (!(await user.favourites.find((el) => el._id.equals(productId)))) {
      await user.favourites.push(productId);
      await user.save();
    } else {
      user.favourites = await user.favourites.filter((el) => !el._id.equals(productId));
      await user.save();
    }
  } catch (err) {
    console.log(err, 'err from favourites');
    return res.sendStatus(500);
  }
  return res.sendStatus(200);
});

router.get('/api/v1/favourites/:id', async (req, res) => {
  const user = await User.findOne({ _id: req.params.id }).populate('favourites');
  const favourites = user.favourites;
  res.json(favourites);
});

module.exports = router;
