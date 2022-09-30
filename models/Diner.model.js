const mongoose = require("mongoose");

const dinerSchema = mongoose.Schema({
  name: String,
  type: String,
  middlePrice: Number,
  menu: String,
  address: String,
  raiting: [{
    grade: Number,
    userId: mongoose.Schema.Types.ObjectId,
  }],
  image: String,
  photo: [String],
  info: String,

});

const Diner = mongoose.model("Diner", dinerSchema);

module.exports = Diner;
