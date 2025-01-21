const express = require("express");
const router = express.Router();
const brandController = require("../controllers/brandController");
const { expressjwt: checkJwt } = require("express-jwt");

router.use(checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }));

router.get("/", brandController.index);
router.post("/", brandController.store);
router.get("/:id", brandController.show);
router.patch("/:id", brandController.update);
router.delete("/:id", brandController.destroy);

module.exports = router;
