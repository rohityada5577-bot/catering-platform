const mongoose = require("mongoose");

const catererSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },

  pricePerPlate: {
    type: Number,
    required: true,
  },

  cuisines: {
    type: [String],
    required: true,
  },

  rating: {
    type: Number,
    required: true,
  },

});

module.exports = mongoose.model("Caterer", catererSchema);