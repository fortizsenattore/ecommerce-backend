const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { expressjwt: checkJwt } = require("express-jwt");

router.get("/", checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),userController.index);
router.post("/", userController.store);
router.post("/email", userController.show);
router.patch("/:id", checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }), userController.profileUpdate);
router.patch("/", userController.update);
router.delete("/:id", userController.destroy);

module.exports = router;
