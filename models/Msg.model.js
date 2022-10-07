const mongoose = require("mongoose");

const msgSchema = mongoose.Schema(
  {
    text: String,
    author: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Msg = mongoose.model("Msg", msgSchema);

module.exports = Msg;
