const mongoose = require("mongoose");

const dinerSchema = mongoose.Schema({
  name: String,
  type: String,
  middlePrice: Number,
  menu: [String],
  address: String,
  rating: {
    type: Number,
    default: 0,
  },
  ratedUsers: [{ user: mongoose.SchemaTypes.ObjectId, rating: Number }],
  image: String,
  photo: [String],
  info: String,
});

const Diner = mongoose.model("Diner", dinerSchema);

module.exports = Diner;
