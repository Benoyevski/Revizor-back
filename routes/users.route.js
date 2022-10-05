const { Router } = require("express");
const router = Router();
const { user } = require("../controllers/user.controller");
const authMiddleware = require('../middleware/auth.middleware')


router.get("/users", user.getUsers);
router.post("/user/login", user.login);
router.post("/user/registr", user.registr);
router.post('/like', user.addLike)
router.post("/user/:id", user.addAvatar);

module.exports = router;
