const express = require('express');
const router = express.Router();
const Basket = require('../models/Basket');
const Goods = require('../models/Goods');
const authMiddleware = require('../middlewares/auth');

router.patch('/api/v1', async (req, res) => {
  const { userId, productId } = req.body;

  try {
    const product = await Goods.findOne({ _id: productId });
    const basket = await Basket.findOne({ user: userId });
    if (basket) {
      if (!(await basket.goods.find((el) => el._id.equals(productId)))) {
        await basket.goods.push(productId);
        basket.summ =
          basket.summ + (product.discountPrice ? product.discountPrice : product.price);
        await basket.save();
      } else {
        basket.goods = await basket.goods.filter((el) => !el._id.equals(productId));
        basket.summ =
          basket.summ - (product.discountPrice ? product.discountPrice : product.price);
        await basket.save();
      }
    } else {
      const newBasket = new Basket({
        date: new Date(),
        user: userId,
        goods: [productId],
        summ: product.discountPrice ? product.discountPrice : product.price,
      });
      await newBasket.save();
    }
  } catch (err) {
    console.log(err, 'err from basket');
    return res.sendStatus(500);
  }
  return res.sendStatus(200);
});

router.get('/api/v1/:id', async (req, res) => {
  const basket = await Basket.findOne({ user: req.params.id }).populate('goods');
  if (basket) return res.json(basket);
  return res.json({});
});

module.exports = router;
