// it is middle ware  
//search in route express


const express = require("express");
const router = express.Router();
const authcontollers = require("../controllers/auth_controller");
const { singupSchema, loginSchema } = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middlewares");
const authMiddleware = require("../middlewares/auth-middleware");

// { home, register,login,about,contact }
router.route("/").get(authcontollers.home);
router.route("/register").post(validate(singupSchema), authcontollers.register);
router.route("/login").post(validate(loginSchema), authcontollers.login);


router.route("/user").get(authMiddleware, authcontollers.user);

module.exports = router;

// app.get("/", (req, res) => {
//     res.status(200).send('welcome to mern code');

// });

// router.get("/", (req, res) => {
//     res.status(200).send('welcome to mern code using router');

// });

// router.route("/").get((req, res) => {
//     res
//         .status(200)
//         .send("welcome to mern series using router");

// });


// router.route("/register").get((req, res) => {
//     res.status.apply(200).send("welcome to registration page usin router");

// });

