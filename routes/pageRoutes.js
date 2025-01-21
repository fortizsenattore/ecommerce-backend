const express = require("express");
const router = express.Router();
const pageController = require("../controllers/pageController");

router.get("/resetdb", pageController.resetDB);


module.exports = router;
