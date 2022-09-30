const Comment = require("../models/Comment.model");

module.exports.comment = {
  getComment: async (req, res) => {
    const data = await Comment.find({});
    res.json(data);
  },
  addComment: async (req, res) => {
    const data = await Comment.create({
      text:req.body.text
    });
    res.json(data);
  },

  deleteComment: async (req, res) => {
    const data = await Comment.findByIdAndDelete(req.params.id);
    res.json(data);
  },
};
