const Comment = require("../models/Comment.model");

module.exports.comment = {
  getComment: async (req, res) => {
    const data = await Comment.find({}).populate("user diner");
    res.json(data);
  },
  addComment: async (req, res) => {
    try {
      const { dinerId, text, plus, minus, rating } = req.body;
      const { id } = req.user;
      const data = await Comment.create({
        diner: dinerId, 
        user: id,
        text,
        plus,
        minus,
        rating,
      });
      return res.json(await data.populate("user diner"))
    } catch (e) {
      return res.json(e);
    }
  },

  deleteComment: async (req, res) => {
    const data = await Comment.findByIdAndDelete(req.params.id);
    res.json(data);
  },
};
