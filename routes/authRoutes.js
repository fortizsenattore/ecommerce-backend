const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { expressjwt: checkJwt } = require("express-jwt");

router.post("/", authController.login);
router.post("/login-admin", authController.loginAdmin);

module.exports = router;
