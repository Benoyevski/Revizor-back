const { Router } = require("express");
const router = Router();
const { comment } = require("../controllers/comment.controller");

router.get("/diner", comment.getComment);
router.post("/diner", comment.addComment);
router.delete("/diner/:id", comment.deleteComment);

module.exports = router;
