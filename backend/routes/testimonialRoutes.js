const express = require("express");
const router = express.Router();
const controller = require("../controllers/testimonialController");

router.get("/", controller.getTestimonials);
router.post("/", controller.createTestimonial);

module.exports = router;