
const express = require("express");
const router = express.Router();
const contactForm = require("../controllers/contact-controller");
const contactcontollers = require("../controllers/contact-controller");
const { contactschema } = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middlewares");


router.route("/contact").post(contactForm);

module.exports = router;

