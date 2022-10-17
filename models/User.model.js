const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  login: String,
  password: String,
  mail: String,
  like: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Diner",
    },
  ],
  avatar: String,
  comment: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Comment",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
