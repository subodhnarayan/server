require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const adminRoute = require("./router/admin-router");
const adminContactRoute = require("./router/admin-router");
const serviceRoute = require('./router/service-router');
const connectDb = require("./utils/db");
const errorMiddleware = require('./middlewares/error-middleware');
// const authMiddleware = require("./middlewares/auth-middleware");
// const adminMiddleware = require("../middlewares/admin-middleware");

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET,POST,DELETE,PUT,PATCH,HEAD",
    credentials: true,

}

app.use(cors(corsOptions));




//Mount the Router:To use the router in your main express app,you cant "mount" it at
// a specific URL Prefix
app.use(express.json());



app.use('/api/auth', authRoute);
app.use('/api/form', contactRoute);
app.use('/api/data', serviceRoute);

//lets defin admin route

app.use('/api/admin', adminRoute);

app.use('/api/admin', adminContactRoute);


app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`sever is running at port: ${PORT}`);
    });
});




// app.get("/", (req, res) => {
//     res.status(200).send('welcome to mern code');

// });


// app.get("/register", (req, res) => {
//     res.status(200).send("welcome to registration page");
// });





