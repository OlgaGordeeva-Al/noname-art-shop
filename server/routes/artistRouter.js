const express = require('express');
const router = express.Router();
const Artist = require('../models/Artist');
const Product = require('../models/Goods')

router.get('/api/v1/all', async (req, res) => {
  const artists = await Artist.find();
  return res.json({ artists });
});

router.post('/api/vi/new', async (req, res) => {
  const {
    name,
    description
  } = req.body;
  if (name) {
    try {
      const newArtist = new Artist({
        name,
        description
      });
      await newArtist.save();
      return res.json(newArtist)
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
    description
  } = req.body;
  if (name || description) {
    const artist = await Artist.findByIdAndUpdate(req.params.id, {
      name,
      description
    })
    if (artist) {
      consile.log(artist, 'from update')
      return res.json(artist);
    }
    return res.sendStatus(200)
  }
  return res.sendStatus(400)
});


router.delete('/api/v1/:id', async (req, res) => {
  const id = req.params.id
  console.log(id)
  if (req.params.id) {
    try {
      await Artist.findByIdAndDelete(id);
      await Product.deleteMany({author: id})
    } catch (err) {
      console.log(err, 'err from delete');
      return res.sendStatus(500);
    }
    return res.sendStatus(200);
  }
  return res.sendStatus(400);
});
module.exports = router;
