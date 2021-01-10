
const express = require('express');
const router = express.Router();
const Product = require('../models/Goods');

let article = 100000;


router.post('/api/vi/new', async (req, res) => {
  const {
    name,
    color,
    authorName,
    size,
    price,
    picture,
    year,
    description,
    discountPrice,
    material,
    amount,
  } = req.body.values;

  if (Object.entries(req.body.values)) {
    try {
      article += 1
      const {author} = await Artist.findOne({name: authorName})._id
      const newProduct = new Product({
        name,
        color,
        authorName,
        size,
        price,
        picture,
        author,
        year,
        description,
        discountPrice,
        material,
        amount,
        article
      });
      await newProduct.save();
      return res.json(newProduct)
    } catch (err) {
      console.log(err, 'err of saving');
    }
    return res.sendStatus(200);
  }

  return res.sendStatus(418);
});

router.put('/api/v1/:id', async (req, res) => {
  const {
    name,
    color,
    authorName,
    size,
    price,
    picture,
    year,
    description,
    discountPrice,
    material,
    amount,
  } = req.body;
  const {author} = await Artist.findOne({name: authorName})._id
  if (Object.entries(req.body)) {
    const art = await Product.findByIdAndUpdate(req.params._id, {
      name,
      color,
      authorName,
      size,
      price,
      picture,
      author,
      year,
      description,
      discountPrice,
      material,
      amount,
    })
    if (art) {
      consile.log(art, 'from update')
      return res.json(art);
    }
    return res.sendStatus(200)
  }
  return res.sendStatus(400)
});


router.delete('/api/v1/:id', async (req, res) => {
  const id = req.params.id
  if (req.params.id) {
    try {
      await Product.findByIdAndDelete(id);
    } catch (err) {
      console.log(err, 'err from delete');
      return res.sendStatus(500);
    }
    return res.sendStatus(200);
  }
  return res.sendStatus(400);
});
module.exports = router;
