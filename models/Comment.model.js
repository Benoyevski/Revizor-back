const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  diner: { type: mongoose.SchemaTypes.ObjectId, ref: "Diner" },
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  text: String,
  plus: String,
  minus: String,
  rating: Number,
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
