const { Router } = require("express");
const router = Router();
const { comment } = require("../controllers/comment.controller");
const middleware = require("../middleware/auth.middleware");

router.get("/review", comment.getComment);
router.post("/diner", middleware, comment.addComment);
router.delete("/diner/:id", comment.deleteComment);

module.exports = router;
