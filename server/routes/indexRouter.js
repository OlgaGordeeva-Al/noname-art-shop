const express = require('express');
const router = express.Router();
const Product = require('../models/Goods');

router.get('/api/v1/products', async (req, res) => {
  const products = await Product.find();
  return res.json({ products });
});


module.exports = router;
