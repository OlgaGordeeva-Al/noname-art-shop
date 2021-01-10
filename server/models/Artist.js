const mongoose = require('mongoose');

const artistSchema = mongoose.Schema({
  name: String,
  description: String
})



module.exports = mongoose.model('artists', artistSchema);
