const { Router } = require("express");
const router = Router();
const { msgController } = require("../controllers/msg.controller");

router.get("/messages", msgController.getMessages);
router.post("/messages", msgController.addMessage);

module.exports = router;
