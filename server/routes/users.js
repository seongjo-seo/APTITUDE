const express = require("express");
const users = require("../controllers/users");
const router = express.Router();

// front에서 page연동
// router.post('/login', authController.login);
// router.get('/auth', authController.auth);
router.post("/create", users.create);

/** 로그인 쿠키 값 */
module.exports = router;
